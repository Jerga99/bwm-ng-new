import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental/rental-listing/rental-listing.component';

const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
  {path: 'rentals', component: RentalListingComponent},
  {path: 'rentals/:rentalId', component: RentalDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
