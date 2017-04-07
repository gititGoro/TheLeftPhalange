import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'plane-taxi-tile',
  templateUrl: './plane-taxi-tile.component.html',
  styleUrls: ['./plane-taxi-tile.component.scss']
})
export class PlaneTaxiTileComponent implements OnInit {

  imagePath: string;
  background: string;
  topStyle: string;
  @Input() top: number=0;

  constructor() {
   
    this.imagePath = "/assets/plane.png"
    this.background = "assets/planetilebackground.jpg";
  }

  ngOnInit() {
     this.topStyle = this.top + "px";
  }

}
