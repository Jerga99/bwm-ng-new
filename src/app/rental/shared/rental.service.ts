import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { exctractApiError } from 'src/app/shared/helpers/functions';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) {}
  
  getRentalById(rentalId: string): Observable<Rental> {
    return this.http.get<Rental>(`/api/v1/rentals/${rentalId}`);
  }

  // generic types TODO: Explain in next lecture
  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`/api/v1/rentals`);
  }

  createRental(newRental: Rental): Observable<Rental> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.authToken}`
      })
    }

    return this.http.post<Rental>('/api/v1/rentals', newRental, httpOptions)
      .pipe(
        catchError(
          (resError: HttpErrorResponse) => throwError(exctractApiError(resError))))
  }
}
