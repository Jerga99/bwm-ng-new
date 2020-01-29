import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-booking-listing',
  templateUrl: './booking-listing.component.html',
  styleUrls: ['./booking-listing.component.scss']
})
export class BookingListingComponent implements OnInit {

  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
