import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedClientePage } from './selected-cliente';

@NgModule({
  declarations: [
    SelectedClientePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedClientePage),
  ],
})
export class SelectedClientePageModule {}
