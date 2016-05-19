import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
var path = require('path');
console.log(path);
// let rootPath = window.Walle.RootPath;
// let comPath = rootPath + '/src/dashboard';
let comPath = __dirname;


@Component({
  selector : 'walle-dashboard',
  // moduleId : 'src/dashboard/dashboard.component',
  moduleId : comPath + '/dashboard.component',
  templateUrl : './dashboard.component.html',
  styleUrls : ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  ngOnInit() {}

}
