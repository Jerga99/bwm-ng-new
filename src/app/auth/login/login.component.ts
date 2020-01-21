import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { forbiddenEmailValidator, sameAsValidator } from '../../shared/validators/functions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  message: string;
  messageTimeout: NodeJS.Timer;
  loginForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.checkLoginMessage(); 
  }

  checkLoginMessage() {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] ? params['message'] : null;

      this.messageTimeout = setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: {message: null},
          queryParamsHandling: 'merge'
        })

        this.message = '';
      }, 2000);
    })
  }

  ngOnDestroy() {
    this.messageTimeout && clearTimeout(this.messageTimeout);
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required, 
        Validators.pattern(this.emailPattern),
        forbiddenEmailValidator('jerga99@gmail.com')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // initForm() {
  //   this.loginForm = this.fb.group({
  //     email: ['', [
  //       Validators.required, 
  //       Validators.pattern(this.emailPattern),
  //       forbiddenEmailValidator('jerga99@gmail.com')
  //     ]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   }, {validators: [sameAsValidator(['password', 'email'])]});
  // }

  login() {
    if (this.loginForm.invalid) { return; }


    alert(this.diagnostic);
  }

  get email(): AbstractControl { return this.loginForm.get('email')}
  get password(): AbstractControl { return this.loginForm.get('password')}

  get diagnostic(): string {
    return JSON.stringify(this.loginForm.value);
  }

}
