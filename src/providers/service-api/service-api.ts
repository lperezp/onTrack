import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import "rxjs/Rx";

/*
  Generated class for the ServiceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServiceApiProvider {
  rutaAPI = "../../assets/data/";

  constructor(public http: HttpClient) {
    
  }

  // METODO PARA CONSULTAR LOS SERVICIOS PENDIENTES
  public getServicios() {
    return this.http.get(this.rutaAPI + "ot.json").map((res: Response) => {
        return res;
      });
  }

  // METODO PARA CONSULTAR LAS ENCUESTAS  
  public getEncuestas() {
    return this.http.get(this.rutaAPI + "encuesta.json").map((res: Response) => {
        return res;
      });
  }

}
