import { Component, OnInit, Input } from '@angular/core';
import { Moment } from 'moment';
import { Booking } from 'src/app/booking/shared/booking.model';

@Component({
  selector: 'bwm-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input('isAuth') isAuth = false;

  newBooking: Booking;
  calendar: {startDate: Moment, endDate: Moment};
  locale = {
    format: 'YYYY/MM/DD'
  }

  constructor() { }

  ngOnInit() {
    this.initBooking();
  }

  initBooking() {
    this.newBooking = new Booking();
    this.newBooking.guests = 1;
  }

  updateBookingDates({startDate, endDate}: {[key: string]: Moment}) {
    if (!startDate || !endDate) { return; }
    
    this.newBooking.startAt = startDate.format();
    this.newBooking.endAt = endDate.format();
  }

  reservePlace() {
    alert(JSON.stringify(this.newBooking));
  }

}
