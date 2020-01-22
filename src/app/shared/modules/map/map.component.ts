import { 
  Component, 
  Input, 
  ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';
import { MapService } from './map.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {

  private map: any;

  @Input('location') set location(location: string) {
    this.createMap();
    this.getGeoLocation(location);
  };
  
  constructor(private mapService: MapService) { }

  private createMap() {
    this.map = tt.map({
      key: this.mapService.API_KEY,
      container: 'bwm-map',
      style: 'tomtom://vector/1/basic-main',
      zoom: 15,
      scrollZoom: false
    });
  }

  private getGeoLocation(location: string) {
    this.mapService
      .requestGeoLocation(location)
      .subscribe(position => {
        this.map.setCenter(new tt.LngLat(position.lon, position.lat));

        const markerDiv = document.createElement('div');
        markerDiv.className = 'bwm-marker';

        new tt.Marker({
          element: markerDiv
        })
          .setLngLat([position.lon, position.lat])
          .addTo(this.map);
      })
  }

}


