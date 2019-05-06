import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle-cliente",
  templateUrl: "./detalle-cliente.page.html",
  styleUrls: ["./detalle-cliente.page.scss"]
})
export class DetalleClientePage implements OnInit {
  cliente = {
    jobs_id: null,
    destination_name: "",
    destination_address: "",
    destination_entity_info: "",
    service_name: "",
    product_name: ""
  };
  constructor(private activeRoute: ActivatedRoute) {
    this.cliente = {
      jobs_id: this.activeRoute.snapshot.paramMap.get("jobs_id"),
      destination_name: this.activeRoute.snapshot.paramMap.get("destination_name"),
      destination_address: this.activeRoute.snapshot.paramMap.get("destination_address"),
      destination_entity_info: this.activeRoute.snapshot.paramMap.get("destination_entity_info"),
      service_name: this.activeRoute.snapshot.paramMap.get("service_name"),
      product_name: this.activeRoute.snapshot.paramMap.get("product_name")
    };
    console.log(this.cliente);
  }

  ngOnInit() {
   
  }
}
