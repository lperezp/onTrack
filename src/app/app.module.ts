import { FirmaPage } from './../pages/firma/firma';
import { LoginPage } from './../pages/login/login';
import { ServiceApiProvider } from './../providers/service-api/service-api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { UuidServiceProvider } from '../providers/uuid-service/uuid-service';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [MyApp, HomePage, ListPage,LoginPage,FirmaPage],
  imports: [BrowserModule, HttpClientModule,IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, LoginPage,FirmaPage],
  providers: [
    StatusBar,
    ServiceApiProvider,
    UuidServiceProvider,
    Camera,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
