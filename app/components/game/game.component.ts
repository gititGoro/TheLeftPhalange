import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/game/game.component.html',
  styleUrls: ['app/components/game/game.component.css']
})
export class GameComponent implements OnInit{


    ngOnInit():void{
        console.log("GameComponent init not implemented.")
    }
}