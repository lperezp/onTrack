import { Injectable } from "@angular/core";
import { Device } from "@ionic-native/device/ngx";

@Injectable({
  providedIn: "root"
})
export class UuidService {
  uuid: any;
  constructor(private device: Device) {
    this.uuid = this.device.uuid;
  }
}
