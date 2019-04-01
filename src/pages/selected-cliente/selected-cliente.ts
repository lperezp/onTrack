import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectedClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selected-cliente',
  templateUrl: 'selected-cliente.html',
})
export class SelectedClientePage {
  cliente: any;  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.data;
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    console.log('Elegido: ', this.cliente);
  }

  openDetalleCliente(){
    this.navCtrl.push("DetalleClientePage");
  }

}
