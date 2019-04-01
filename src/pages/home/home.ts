import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  ot : any;
  clienteSelected : any;
  constructor(public navCtrl: NavController, private apiService: ServiceApiProvider) {

    this.getAllServices();

    /* this.ot = [
      {
        id: 1,
        codigo: "0033-08-11",
        cliente: "CASINO JOCKER",
        direccion: "Jr. Independencia 141",
        tipo: "Preventivo - Bin de Hielo",
        producto: "Bin de Hielo: 1109120011589",
        estado: "En camino"
      },
      {
        id: 2,
        codigo: "00006-09-09",
        cliente: "CASINO LIBERTY AVIACION",
        direccion: "Av. Aviación N° 3315 - N° 3317",
        tipo: "Preventivo - Post Mix",
        producto: "Dispenser de Bebida: 610131065",
        estado: "Pendiente"
      },
      {
        id: 3,
        codigo: "00006-09-09",
        cliente: "TELEPIZZA MAL DEL SUR",
        direccion: "Av. Los Lirios 301 Cuarto Nivel",
        tipo: "Correctivo . Prod. de Hielo",
        producto: "Productora de Hielo: 11011191683",
        estado: "En destino"
      },
      {
        id: 4,
        codigo: "0006-09-09",
        cliente: "CASINO JOCKER",
        direccion: "Jr. Independencia 141",
        tipo: "Correctivo: Dispensador de agua",
        producto: "Dispensador de agua: 648645194551",
        estado: "Pendiente"
      },
      {
        id: 5,
        codigo: "00006-09-20",
        cliente: "TELEPIZZA MAL DEL SUR",
        direccion: "Av. Los Lirios 301 Cuarto Nivel",
        tipo: "Preventivo . Prod. de Hielo",
        producto: "Productora de Hielo: 20171115",
        estado: "En destino"
      }
    ]; */
  }

  getAllServices(){
    this.apiService.getServicios().subscribe(res =>{
      this.ot= res['jobs'];
      console.log(this.ot);
    })
  }

  openSelectedClientePage(selectedItem: any) {
    this.clienteSelected = selectedItem;
    console.log(this.clienteSelected);
    this.navCtrl.push("SelectedClientePage",this.clienteSelected);
  }
}
