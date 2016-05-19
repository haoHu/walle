import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
// let rootPath = window.Walle.RootPath;
// let comPath = rootPath + '/src/weather';
// console.info(__dirname);
let comPath = __dirname;

@Component({
  selector : 'walle-weather',
  // moduleId: module.id,
  // templateUrl : 'file:///Users/huhao/github/walle/src/weather/weather.component.html',
  // styleUrls : ['file:///Users/huhao/github/walle/src/weather/weather.component.css']
  moduleId : comPath + '/weather.component',
  templateUrl : './weather.component.html',
  styleUrls : ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private router: Router
  ) {}
  ngOnInit() {

  }
}
