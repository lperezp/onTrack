import { ServiceApiProvider } from './../providers/service-api/service-api';
import { HttpClientModule } from '@angular/common/http';
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
import { MyNavProvider } from '../providers/my-nav/my-nav';

@NgModule({
  declarations: [MyApp,FormPage,Form2Page, HomePage, ListPage, FirmaPage],
  imports: [BrowserModule, HttpClientModule,IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,FormPage,Form2Page, HomePage, ListPage, FirmaPage],
  providers: [
    StatusBar,
    ServiceApiProvider,
    MyNavProvider,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MyNavProvider
  ]
})
export class AppModule {}
