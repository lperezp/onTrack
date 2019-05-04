import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OtsPendientesPage } from './ots-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: OtsPendientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtsPendientesPage]
})
export class OtsPendientesPageModule {}
