import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


enum BOOKING_TYPES {
  received = 'received',
  all = 'all'
}

@Component({
  selector: 'bwm-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {

  bookingType: string;
  bookingTypes = BOOKING_TYPES;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookingType = params['type'] || this.bookingTypes.all;
    })
  }

}
