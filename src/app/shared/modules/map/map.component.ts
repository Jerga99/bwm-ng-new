import { 
  Component, 
  Input, 
  ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {

  @Input('location') set location(location: string) {
    this.createMap();
  };
  private readonly API_KEY = 'Rukxk4n6MVk8oILY0HUJAmAAvAiMM1XJ';

  constructor() { }

  private createMap() {
    const map = tt.map({
      key: this.API_KEY,
      container: 'bwm-map',
      style: 'tomtom://vector/1/basic-main'
    });
      
    map.addControl(new tt.NavigationControl());
  }
}
