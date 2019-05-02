import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http/ngx';

const rutaAPI = "http://ontrack-dev.gerenpop.com:4000/mobile/api/v1/";
const header = "{ 'Content-Type': 'application/json' }";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HTTP) {}

 get(ruta){
  return this.http.get(rutaAPI + ruta, {},{} )
  }

  post(ruta,body){
    return this.http.post(rutaAPI + ruta,body,header)
    }
}
