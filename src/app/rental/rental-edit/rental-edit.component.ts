import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { UppercasePipe } from 'src/app/shared/pipes/uppercase.pipe';

@Component({
  selector: 'bwm-rental-edit',
  templateUrl: './rental-edit.component.html',
  styleUrls: ['./rental-edit.component.scss']
})
export class RentalEditComponent implements OnInit {

  rental: Rental;

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private upper: UppercasePipe) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalService
        .getRentalById(params['rentalId'])
        .subscribe(rental => {
          this.rental = rental;
        })
    })
  }

  updateRental(rentalEvent: any) {
    const { data, notifier } = rentalEvent;

    this.rentalService
      .updateRental(this.rental._id, data)
      .subscribe(updatedRental => {
        this.rental = updatedRental;
        notifier(null);
      }, (error) => {
        alert('Update Error!');
        notifier(error);
      })
  }

  transformLocation = (location: string) => {
    return this.upper.transform(location, 'firstLetterUpper');
  }

  countBedroomsAssets(asset: number): number {
    const { numOfRooms } = this.rental;
    return parseInt(<any>numOfRooms, 10) + asset;
  }

  get rentalLocation(): string {
    return `${this.rental.city}, ${this.rental.street}`
  }

}
