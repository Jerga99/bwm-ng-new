
import { Component } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'bwm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService){}
}
