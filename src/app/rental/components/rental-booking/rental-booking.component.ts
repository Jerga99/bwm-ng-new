import { Component, OnInit, Input } from '@angular/core';
import { Moment } from 'moment';
import { Booking } from 'src/app/booking/shared/booking.model';
import { Rental } from '../../shared/rental.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TimeService } from 'src/app/shared/services/time.service';

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
  locale = {
    format: 'YYYY/MM/DD'
  }

  constructor(
    public timeService: TimeService,
    public modalService: NgxSmartModalService) { }

  ngOnInit() {
    this.initBooking();
  }

  initBooking() {
    this.newBooking = new Booking();
    this.newBooking.guests = 1;
  }

  updateBookingDates({startDate, endDate}: {[key: string]: Moment}) {
    if (!startDate || !endDate) { return; }
    debugger
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
    return this.timeService.isDateInPast(date);
  }

  openConfirmationModal() {
    this.modalService.getModal('confirmationModal').open();
  }

  get canOpenConfirmation() {
    return this.newBooking.startAt &&
           this.newBooking.endAt &&
           this.newBooking.guests &&
           this.newBooking.guests > 0;
  }

  reservePlace() {
    alert(JSON.stringify(this.newBooking));
  }

}
