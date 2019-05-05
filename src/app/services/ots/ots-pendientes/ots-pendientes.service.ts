import { ConnectionService } from "./../../connection/connection.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OtsPendientesService {
  constructor(private connectionService: ConnectionService) {}

  getOTSPendientes() {
    //VERIFICAR EL ID DE CONFIGURACION  <============================
    return this.connectionService.get(
      "jobs/search?userConfigurationIdList=15,4"
    );
  }
}
