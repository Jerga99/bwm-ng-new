
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapModule } from '../shared/modules/map/map.module';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { RentalSecretComponent } from './rental-secret/rental-secret.component';

import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective, BwmNgIfDirective, BwmNgForDirective } from '../shared/directives/custom.directive';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalNewComponent } from './rental-new/rental-new.component';
import { FormsModule } from '@angular/forms';
import { RentalBookingComponent } from './components/rental-booking/rental-booking.component';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListingComponent},
      {path: 'new', component: RentalNewComponent, canActivate: [AuthGuard]},
      {path: 'secret', component: RentalSecretComponent, canActivate: [AuthGuard]},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    RentalDetailComponent,
    RentalListingComponent,
    RentalComponent,
    RentalCardComponent,
    UppercasePipe,
    FirstUpperLetterPipe,
    HighlightDirective,
    BwmNgIfDirective,
    BwmNgForDirective,
    RentalSecretComponent,
    RentalNewComponent,
    RentalBookingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MapModule,
    FormsModule
  ]
})
export class RentalModule {}