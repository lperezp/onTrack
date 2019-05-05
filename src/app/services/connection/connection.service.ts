import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

const rutaAPI = "http://ontrack-dev.gerenpop.com:4000/mobile/api/v1/";
const header =
  '{"Content-Type": "application/json", "Authorization": "Bearer "+}';

@Injectable({
  providedIn: "root"
})
export class ConnectionService {
  token: any;
  constructor(private http: HTTP) {}

  get(ruta) {
    let options = {
      headers: { Authorization: "Bearer " + this.token }
    };
    return this.http.get(
      rutaAPI + ruta,
      {},
      { Authorization: "Bearer " + this.token }
    );
  }

  post(ruta, body) {
    return this.http.post(rutaAPI + ruta, body, header);
  }

  getToken(uuid, appName) {
    return this.http.get(
      rutaAPI + "user/login?uuid=" + uuid + "&appName=" + appName,
      {},
      {}
    );
  }
}
