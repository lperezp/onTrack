import { Component } from '@angular/core';
import {  NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-cliente',
  templateUrl: 'detalle-cliente.html',
})
export class DetalleClientePage {
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleClientePage');
  }

  openFormulario(){
    this.navCtrl.push("FormPage")
  }

 
}
