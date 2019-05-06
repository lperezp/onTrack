import { NavController } from "@ionic/angular";
import { OtsPendientesService } from "./../services/ots/ots-pendientes/ots-pendientes.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ots-pendientes",
  templateUrl: "./ots-pendientes.page.html",
  styleUrls: ["./ots-pendientes.page.scss"]
})
export class OtsPendientesPage implements OnInit {
  data: any;
  jobs: any;
  constructor(
    private otsService: OtsPendientesService,
    private router: Router,
    private NavCtrl: NavController
  ) {}

  ngOnInit() {
    this.getOTSPendientes();
  }

  getOTSPendientes() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.jobs = this.data["jobs"];
      console.log(this.jobs);
    });
  }

  selectedOT(elemento) {
    let ot = {
      jobs_id: elemento.jobs_id,
      destination_name: elemento.destination_name,
      destination_address: elemento.destination_address,
      destination_entity_info: elemento.destination_entity_info,
      service_name: elemento.service_name,
      product_name: elemento.product_name
    };
    this.router.navigate([
      "detalle",
      ot.jobs_id,
      ot.destination_name,
      ot.destination_address,
      ot.destination_entity_info,
      ot.service_name,
      ot.product_name
    ]);
  }
}
