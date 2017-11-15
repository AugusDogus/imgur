import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username;
  private password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Login(){
    //Attempt to login.
    //If login was successful, go to Home Page.
    //Otherwise, clear username and password fields and display a message that it failed.
    alert("Logged in! " + this.username + ' ' + this.password);
  }

  static GoogleLogin(){
    //Attempt to login.
    alert("Logged in with Google!");
  }

}
