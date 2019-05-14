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
    private router: Router
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
    this.router.navigate(["detalle", elemento.services_id]);
  }
}
