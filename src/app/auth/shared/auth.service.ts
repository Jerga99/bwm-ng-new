import { Injectable } from '@angular/core';
import { RegisterForm } from './register-form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  //'/api/v1/users/register'
  register(formData: RegisterForm): Observable<any> {
    return this.http
      .post('/api/v1/users/register', formData)
      .pipe(catchError((resError: HttpErrorResponse) => {
        debugger
        let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];
        if (resError && resError.error && resError.error.errors) {
          errors = resError.error.errors;
        }

        return throwError(errors);
      })
    )
  }

  login() {

  }
}