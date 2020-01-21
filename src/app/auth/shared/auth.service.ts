import { Injectable } from '@angular/core';
import { RegisterForm } from './register-form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { exctractApiError } from 'src/app/shared/helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  //'/api/v1/users/register'
  register(formData: RegisterForm): Observable<any> {
    return this.http
      .post('/api/v1/users/register', formData)
      .pipe(catchError((resError: HttpErrorResponse) => 
        throwError(exctractApiError(resError))
      )
    )
  }

  // /api/v1/users/login
  login(formData: any) {
    return this.http
      .post('/api/v1/users/login', formData)
      .pipe(
        map((token: string) => {
          this.saveToken(token);
          return token;
        }),
        catchError((resError: HttpErrorResponse) => 
          throwError(exctractApiError(resError))
        )
    )}

  private saveToken(token) {
    alert('I am saving token!');
  }
}