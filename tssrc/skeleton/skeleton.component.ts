import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

// import {DashboardComponent} from '../dashboard/dashboard.component';
// import {WeatherComponent} from '../weather/weather.component';

import * as WalleRoute from '../mod/route.service';

console.log(WalleRoute.WalleRouteService);
let WalleRouteService = new WalleRoute.WalleRouteService();
let routeConfigs: Array<any> = WalleRouteService.getRoutes();

let comPath = __dirname;

// @RouteConfig([
//   {
//     path : '/dashboard',
//     name : 'Dashboard',
//     component : DashboardComponent,
//     useAsDefault : true
//   },
//   {
//     path : '/weather',
//     name : 'Weather',
//     component : WeatherComponent
//   }
// ])

@RouteConfig(routeConfigs)
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
export class AppComponent  implements OnInit{
  title = "Walle Skill 测试路由";
  ngOnInit() {
    var menu1 = $('#walle_menu_1');
		menu1.find('.menu-list').width(2260);
		var scrollMenu1 = new IScroll(menu1[0], {
			scrollX: true,
			scrollY: false,
			mouseWheel: false,
			momentum : false,
			snap : true,
			snapSpeed : 400,
			keyBindings : true

		});
    $.material.init();
  };
};
