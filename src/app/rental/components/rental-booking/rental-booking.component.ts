import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input('isAuth') isAuth = false;

  constructor() { }

  ngOnInit() {
  }

}
