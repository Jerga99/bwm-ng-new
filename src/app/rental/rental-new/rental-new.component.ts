import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { NgForm } from '@angular/forms';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.scss']
})
export class RentalNewComponent implements OnInit {

  rentalCategories = Rental.CATEGORIES;
  newRental: Rental;

  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
  }

  createRental(rentalForm: NgForm) {
    if (rentalForm.invalid) { return; }

    this.rentalService.createRental(this.newRental);
  }
}
