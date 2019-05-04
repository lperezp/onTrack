import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UuidService {
  uuid: any;
  constructor(private device: Device) {
    this.uuid = this.device.uuid;
  }
}
