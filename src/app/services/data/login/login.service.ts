import { Injectable } from "@angular/core";
import { DataService } from "../data.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private dataService: DataService) {}

  signin(uuid) {
    return this.dataService.get("user/login?uuid=" + uuid + "&appName=OnTrack");
  }
}
