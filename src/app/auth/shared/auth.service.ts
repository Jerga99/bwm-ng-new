import { Injectable } from '@angular/core';
import { RegisterForm } from './register-form.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  //'/api/v1/users/register'
  register(formData: RegisterForm): Observable<any> {
    return this.http.post('/api/v1/users/register', formData)
  }

  login() {

  }
}