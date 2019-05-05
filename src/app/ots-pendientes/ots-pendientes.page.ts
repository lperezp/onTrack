import { OtsPendientesService } from "./../services/ots/ots-pendientes/ots-pendientes.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ots-pendientes",
  templateUrl: "./ots-pendientes.page.html",
  styleUrls: ["./ots-pendientes.page.scss"]
})
export class OtsPendientesPage implements OnInit {
  data: any;
  constructor(private otsService: OtsPendientesService) {}

  ngOnInit() {
    this.getOTSPendientes();
  }

  getOTSPendientes() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
    });
  }
}
