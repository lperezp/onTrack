import { Form2Page } from './../pages/form2/form2';
import { FirmaPage } from './../pages/firma/firma';
import { SelectedClientePage } from "./../pages/selected-cliente/selected-cliente";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DetalleClientePage } from "../pages/detalle-cliente/detalle-cliente";
import { FormPage } from '../pages/form/form';

@NgModule({
  declarations: [MyApp,FormPage,Form2Page, HomePage, ListPage, FirmaPage, SelectedClientePage,DetalleClientePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,FormPage,Form2Page, HomePage, ListPage, FirmaPage, SelectedClientePage,DetalleClientePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
