
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('isAuthenticated') isAuthenticated = false;
  @Input('username') username = '';
  @Input('logout') logout = () => {};
}
