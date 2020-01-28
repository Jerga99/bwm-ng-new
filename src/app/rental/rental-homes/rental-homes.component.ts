import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'bwm-rental-homes',
  templateUrl: './rental-homes.component.html',
  styleUrls: ['./rental-homes.component.scss']
})
export class RentalHomesComponent implements OnInit {

  city: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.city = params.get('city');
    })
  }

}
