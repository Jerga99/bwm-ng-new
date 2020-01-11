
import { Component } from '@angular/core';

@Component({
  selector: 'bwm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 0;


  public increment(event: any, incrementor: number) {
    // this.counter = this.counter + 1;
    this.counter += incrementor;
  }

  public decrement() {
    this.counter -= 1;
  }
}
