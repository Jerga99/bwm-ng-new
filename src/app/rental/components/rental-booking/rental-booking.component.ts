import { Component, OnInit, Input } from '@angular/core';
import { Moment } from 'moment';
import { Booking } from 'src/app/booking/shared/booking.model';
import { Rental } from '../../shared/rental.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TimeService } from 'src/app/shared/services/time.service';
import { BookingService } from 'src/app/booking/shared/booking.service';

@Component({
  selector: 'bwm-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input('isAuth') isAuth = false;
  @Input('rental') rental: Rental;

  newBooking: Booking;
  calendar: {startDate: Moment, endDate: Moment};
  madeBookings: string[] = [];
  locale = {
    format: 'YYYY/MM/DD'
  }

  constructor(
    private bookingService: BookingService,
    public timeService: TimeService,
    public modalService: NgxSmartModalService) { }

  ngOnInit() {
    this.initBooking();
    this.bookingService
      .getBookings(this.rental._id)
      .subscribe(bookings => {
        bookings.forEach(booking => this.addBookedOutDates(booking.startAt, booking.endAt))
      })
  }

  reservePlace() {
    this.newBooking.rental = {...this.rental};
    this.bookingService
      .createBooking(this.newBooking)
      .subscribe((savedBooking) => {
        alert('Huray! Booking created!');
        this.addBookedOutDates(savedBooking.startAt, savedBooking.endAt);
        this.calendar = null;
        this.initBooking();
        this.modal.close();
      }, (error) => {
        alert('WE cannot make booking!');
      })
  }

  initBooking() {
    this.newBooking = new Booking();
    this.newBooking.guests = 1;
  }

  updateBookingDates({startDate, endDate}: {[key: string]: Moment}) {
    if (!startDate || !endDate) { return; }
    if (startDate.isSame(endDate, 'days')) {
      alert('Invalid Dates!');
      this.calendar = null;
    }
    
    this.newBooking.startAt = startDate.format();
    this.newBooking.endAt = endDate.format();
    this.newBooking.nights = endDate.diff(startDate, 'days');
    this.newBooking.price = this.newBooking.nights * this.rental.dailyPrice;
  }

  checkIfDateIsInvalid = (date: Moment): boolean => {
    return this.timeService.isDateInPast(date) ||
           this.madeBookings.includes(date.format())
  }

  private openConfirmationModal() {
    this.modal.open();
  }

  private addBookedOutDates(startAt: string, endAt: string) {
    const dateRange = this.timeService.getRangeOfDates(startAt, endAt);
    this.madeBookings.push(...dateRange);
  }

  get modal() {
    return this.modalService.getModal('confirmationModal');
  }

  get canOpenConfirmation() {
    return this.newBooking.startAt &&
           this.newBooking.endAt &&
           this.newBooking.guests &&
           this.newBooking.guests > 0;
  }
}
