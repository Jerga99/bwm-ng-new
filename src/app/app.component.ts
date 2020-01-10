
import { Component } from '@angular/core';
import { AppDecorator } from './decorators';


@AppDecorator({
  message: 'Hello World!'
})
@Component({
  selector: 'bwm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public test: string = 'We are just testing';
}
