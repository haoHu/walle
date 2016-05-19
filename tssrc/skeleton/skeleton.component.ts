import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {WeatherComponent} from '../weather/weather.component';

let comPath = __dirname;

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
  moduleId : comPath + '/skeleton.component',
  templateUrl : './skeleton.component.html',
  styleUrls : ['./skeleton.component.css'],
  directives : [ROUTER_DIRECTIVES],
  providers : [
    ROUTER_PROVIDERS
  ]
})
export class AppComponent {
  title = "Walle Skill 测试路由";
};
