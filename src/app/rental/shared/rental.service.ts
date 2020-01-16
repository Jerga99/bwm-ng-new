import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {}
  
  getRentalById(rentalId: string): Observable<Rental> {
    return this.http.get<Rental>(`http://localhost:4200/api/v1/rentals/${rentalId}`);
  }

  // generic types TODO: Explain in next lecture
  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`http://localhost:4200/api/v1/rentals`);
  }
}
