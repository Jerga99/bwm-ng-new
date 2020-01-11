import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental/rental-listing/rental-listing.component';
// root module
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalDetailComponent,
    RentalListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
