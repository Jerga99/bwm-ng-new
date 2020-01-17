import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../shared/register-form.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormData: RegisterForm;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor() { }

  ngOnInit() {
    this.registerFormData = new RegisterForm();
  }

  register(form: NgForm) {
    this.validateInputs(form);

    if (form.invalid) { return; }

  }

  validateInputs(form: NgForm) {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsDirty();
    })
  }
}
