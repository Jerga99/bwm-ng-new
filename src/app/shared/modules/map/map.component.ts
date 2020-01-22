import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input('location') location: string;

  constructor() { }

  ngOnInit() {
  }

}
