import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { DetalleClientePage } from './detalle-cliente';

/**
 * Generated class for the DetalleClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@NgModule({
  declarations: [
    DetalleClientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleClientePage),
  ],
})
export class DetalleClientePageModule {}
