
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapModule } from '../shared/modules/map/map.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';
import { RentalSecretComponent } from './rental-secret/rental-secret.component';

import { UppercasePipe, FirstUpperLetterPipe } from '../shared/pipes/uppercase.pipe';
import { HighlightDirective, BwmNgIfDirective, BwmNgForDirective } from '../shared/directives/custom.directive';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalNewComponent } from './rental-new/rental-new.component';
import { FormsModule } from '@angular/forms';
import { RentalBookingComponent } from './components/rental-booking/rental-booking.component';
import { RentalHomesComponent } from './rental-homes/rental-homes.component';
import { SharedRentalModule } from '../shared/modules/shared-rental.module';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListingComponent},
      {path: 'new', component: RentalNewComponent, canActivate: [AuthGuard]},
      {path: 'secret', component: RentalSecretComponent, canActivate: [AuthGuard]},
      {path: ':city/homes', component: RentalHomesComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    RentalDetailComponent,
    RentalListingComponent,
    RentalComponent,
    UppercasePipe,
    FirstUpperLetterPipe,
    HighlightDirective,
    BwmNgIfDirective,
    BwmNgForDirective,
    RentalSecretComponent,
    RentalNewComponent,
    RentalBookingComponent,
    RentalHomesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MapModule,
    FormsModule,
    SharedRentalModule,
    NgxDaterangepickerMd.forRoot(),
    NgxSmartModalModule.forChild()
  ]
})
export class RentalModule {}