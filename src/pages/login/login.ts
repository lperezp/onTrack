import { HomePage } from './../home/home';
import { UuidServiceProvider } from './../../providers/uuid-service/uuid-service';
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
 uuid : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private uuidVar : UuidServiceProvider) {
     this.uuid = this.uuidVar.UUID;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

}
