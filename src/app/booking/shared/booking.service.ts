import { Injectable } from "@angular/core";
import { Booking } from './booking.model';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient){}
  
  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>('/api/v1/bookings', booking);
  }
}