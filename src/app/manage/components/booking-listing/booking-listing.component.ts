import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/booking/shared/booking.model';

@Component({
  selector: 'bwm-booking-listing',
  templateUrl: './booking-listing.component.html',
  styleUrls: ['./booking-listing.component.scss']
})
export class BookingListingComponent implements OnInit {

  @Input('title') title: string;
  @Input('getBookings') getBookings: () => Observable<Booking[]>

  bookings: Booking[];

  ngOnInit() {
    this.getBookings()
      .subscribe((bookings) => {
        debugger
        this.bookings = bookings;
      })
  }

}
