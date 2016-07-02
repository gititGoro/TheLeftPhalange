import { Component } from '@angular/core';
import {GameComponent} from './game/game.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Game']">Play Game</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/game',
    name: 'Game',
    component: GameComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'The Left Phalange';
}