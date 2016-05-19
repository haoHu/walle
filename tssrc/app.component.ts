import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/dashboard.component';
import {WeatherComponent} from './weather/weather.component';

@RouteConfig([
  {
    path : '/dashboard',
    name : 'Dashboard',
    component : DashboardComponent,
    useAsDefault : true
  },
  {
    path : '/weather',
    name : 'Weather',
    component : WeatherComponent
  }
])
@Component({
  selector : "walle-app",
  template : `
    <h1>{{title}}</h1>
    <nav>
      <a class="btn btn-link" [routerLink]="['Dashboard']">Dashboard</a>
      <a class="btn btn-link" [routerLink]="['Weather']">Weather</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives : [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
export class AppComponent {
  title = 'Walle Skill 测试路由';
}
