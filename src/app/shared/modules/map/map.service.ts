import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import tt from '@tomtom-international/web-sdk-maps';

interface TomResponse {
  summary: {[key: string]: any};
  results: {[key: string]: any}[];
}

interface GeoPosition {
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  requestGeoLocation(location: string, apiKey: String): Observable<GeoPosition> {
    return this.http
      .get(`https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`)
      .pipe(
        map((tomRes: TomResponse) => {
          const results = tomRes.results;
          if (results && results.length > 0) {
            return results[0].position;
          }

          throw this.locationError;
      }), catchError(_ => throwError(this.locationError)))
  }

  createMap(options) {
    return tt.map({
      key: options.apiKey,
      container: 'bwm-map',
      style: 'tomtom://vector/1/basic-main',
      zoom: 15,
      scrollZoom: false
    });
  }

  initMap(map: any, position: GeoPosition) {
    this.centerMap(map, position);
    this.addMarkerToMap(map, position);
  }

  centerMap(map: any, position: GeoPosition) {
    map.setCenter(new tt.LngLat(position.lon, position.lat));
  }

  addMarkerToMap(map: any, position: GeoPosition) {
    const markerDiv = document.createElement('div');
    markerDiv.className = 'bwm-marker';

    new tt.Marker({
      element: markerDiv
    })
      .setLngLat([position.lon, position.lat])
      .addTo(map);
  }

  addPopupToMap(map: any, message: string) {
    new tt.Popup({className: 'bwm-popup', closeButton: false, closeOnClick: false})
      .setLngLat(new tt.LngLat(0, 0))
      .setHTML(`<p>${message}</p>`)
      .addTo(map);
  }

  private get locationError() {
    return new Error('Location not found!');
  }
}






