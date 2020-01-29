import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { BookingListingComponent } from './components/booking-listing/booking-listing.component';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { SharedRentalModule } from '../shared/modules/shared-rental.module';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      {path: 'bookings', component: ManageBookingsComponent, canActivate: [AuthGuard]},
      {path: 'rentals', component: ManageRentalsComponent, canActivate: [AuthGuard]}
    ]
  }
]

@NgModule({
  declarations: [
    ManageRentalsComponent, 
    ManageBookingsComponent,
    ManageComponent,
    BookingListingComponent
  ],
  imports: [
    CommonModule,
    SharedRentalModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageModule { }
