import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPage: string = "page1";
  isSec1Enable:boolean 
  isSec2Enable:boolean
  isSec3Enable:boolean

  constructor(public navCtrl: NavController) {

  }

}
