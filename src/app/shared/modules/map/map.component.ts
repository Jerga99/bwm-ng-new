import { 
  Component, 
  Input, 
  ViewEncapsulation } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {

  private map: any;
  public readonly API_KEY = 'Rukxk4n6MVk8oILY0HUJAmAAvAiMM1XJ';

  @Input('location') set location(location: string) {
    this.createMap();
    this.getGeoLocation(location);
  };
  
  constructor(private mapService: MapService) { }

  private createMap() {
    this.map = this.mapService.createMap({apiKey: this.API_KEY})
  }

  private getGeoLocation(location: string) {
    this.mapService
      .requestGeoLocation(location, this.API_KEY)
      .subscribe(position => {
        this.mapService.initMap(this.map, position);
      }, (error: Error) => {
        this.mapService.addPopupToMap(this.map, error.message);
      })
  }

}


