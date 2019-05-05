import { ConnectionService } from "./../services/connection/connection.service";
import { Component } from "@angular/core";
import { UuidService } from "../services/uuid/uuid.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  uuid: any;
  appName: string;
  constructor(
    private uuidService: UuidService,
    private connectionService: ConnectionService
  ) {
    this.uuid = this.uuidService.uuid;
    this.appName = "OnTrack";
    //UUID PARA PRUEBAS => 123456789123456
    this.uuid = 123456789123456;
    //UUID PARA PRUEBAS => 123456789123456
  }

  Login() {
    this.connectionService.getToken(this.uuid, this.appName).then(data => {
      this.connectionService.token = JSON.parse(data.data);
      console.log("Token", this.connectionService.token.token);
    });
  }
}
