import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.scss']
})
export class RentalNewComponent implements OnInit {

  rentalCategories = Rental.CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
