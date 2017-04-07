import { Component } from '@angular/core';
import {PlaneTaxiTileComponent} from './plane-taxi-tile/plane-taxi-tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  taxis:PlaneTaxiTileComponent[] = [];
  array:number[] =[100,200,300,400,500,600];
  constructor(){
    
  }
}
