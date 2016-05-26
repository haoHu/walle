import { Injectable } from '@angular/core';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {WeatherComponent} from '../weather/weather.component';

export class Route {
  path : string;
  name : string;
  component : any;
  useAsDefault : boolean;
}

let WalleRoutes: Route[] = [
  {
    path : '/dashboard',
    name : 'Dashboard',
    component : DashboardComponent,
    useAsDefault : true
  },
  {
    path : '/weather',
    name : 'Weather',
    component : WeatherComponent,
    useAsDefault : false
  }
];

@Injectable()
export class WalleRouteService {
  public getRoutes () {
    return WalleRoutes;
  }
};
