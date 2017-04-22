import { Component, OnInit } from '@angular/core';
import {PlaneTaxiTileComponent} from './../plane-taxi-tile/plane-taxi-tile.component';

@Component({
  selector: 'plane-taxi-pipeline',
  templateUrl: './plane-taxi-pipeline.component.html',
  styleUrls: ['./plane-taxi-pipeline.component.scss']
})
export class PlaneTaxiPipelineComponent implements OnInit {
  taxis:PlaneTaxiTileComponent[] = [];
  array:number[] =[100,200,300,400,500,600];
  constructor() { }

  ngOnInit() {
  }

}
