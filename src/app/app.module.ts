import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// IMPORT PLUGIN NATIVE OF UUID
import { Device } from "@ionic-native/device/ngx";

// IMPORT PLUGIN NATIVE OF REST API
import { HTTP } from "@ionic-native/http/ngx";

// IMPORT PLUGIN NATIVE SCREEN ORIENTATION
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    HTTP,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
