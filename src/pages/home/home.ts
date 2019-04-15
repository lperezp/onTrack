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
