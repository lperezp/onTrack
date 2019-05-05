import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "OTs Pendientes",
      url: "/ots-pendientes",
      icon: "briefcase"
    },
    {
      title: "OTs Programadas",
      url: "/home",
      icon: "search"
    },
    {
      title: "Sincronizar",
      url: "/home",
      icon: "refresh"
    }
  ];

  public opcionesPage = [
    {
      title: "Salir",
      url: "/ots-pendientes",
      icon: "exit"
    },
    {
      title: "Versión",
      url: "/home",
      icon: "phone-portrait"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
