import { Component } from "@angular/core";
import { UuidService } from "../services/uuid/uuid.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  uuid: any;
  constructor(private uuidService: UuidService) {
    this.uuid = this.uuidService.uuid;
    //UUID PARA PRUEBAS => 123456789123456
    this.uuid = 123456789123456;
    //UUID PARA PRUEBAS => 123456789123456
  }
}
