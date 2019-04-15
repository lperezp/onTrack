import { FirmaPage } from './../firma/firma';
import { Component } from '@angular/core';
import {  NavController, NavParams, IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-detalle-cliente',
  templateUrl: 'detalle-cliente.html',
})
export class DetalleClientePage {
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
   
  }

  openFormulario(){
    this.navCtrl.push("FormPage")
  }

  getCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  openFirma(){
    this.navCtrl.push(FirmaPage);
  }
 
}
