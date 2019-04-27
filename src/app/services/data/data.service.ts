import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const rutaAPI = "http://ontrack-dev.gerenpop.com:4000/mobile/api/v1/";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  get(ruta) {
    return this.http.get(rutaAPI + ruta);
  }

  post(ruta, data) {
    return this.http.post(rutaAPI + ruta, data, httpOptions);
  }
}
