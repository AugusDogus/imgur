import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ImgurApiV3Component} from "../../components/imgur-api-v3/imgur-api-v3";
import { ENV } from '@app/env'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ImgurApiV3Component]
})

export class HomePage {

  constructor(public navCtrl: NavController, public imgur: ImgurApiV3Component) {}

  ionViewDidLoad() {
    console.log(ENV);
  }



}
