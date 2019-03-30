import { FirmaPage } from './../pages/firma/firma';
import { SelectedClientePage } from "./../pages/selected-cliente/selected-cliente";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { DetalleClientePage } from "../pages/detalle-cliente/detalle-cliente";
import { FormPage } from '../pages/form/form';
import { Form2Page } from '../pages/form2/form2';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ icono:string, title: string; component: any }>;
  pages2: Array<{ icono:string, title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icono:"briefcase", title: "OTs Pendientes", component: HomePage },
      { icono:"search", title: "OTs Programadas", component: SelectedClientePage },
      { icono:"refresh", title: "Sincronizar", component: DetalleClientePage }
     /*  { icono:"exit", title: "Firma", component: FirmaPage },
      { icono:"information-circle-outline", title: "Formulario 1", component: FormPage },
      { icono:"briefcase", title: "Formulario 2", component: Form2Page } */
    ];

    this.pages2 = [
      { icono:"exit", title: "Salir", component: FirmaPage },
      { icono:"alert", title: "Versión", component: FormPage }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
