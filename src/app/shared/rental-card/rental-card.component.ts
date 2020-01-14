import { Component, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent {

  @Input('rental') rental;
}
