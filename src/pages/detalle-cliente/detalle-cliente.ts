import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detalle-cliente',
  templateUrl: 'detalle-cliente.html',
})
export class DetalleClientePage {
  objetoRecibido: any;  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.objetoRecibido = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleClientePage');
  }

  ngOnInit() {
    console.log('ge', this.objetoRecibido);
  }

}
