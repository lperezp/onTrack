import { DataService } from "./../data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OtsService {
  constructor(private dataService: DataService) {}

  getAllOTS() {
    return this.dataService.get("jobs/search?userConfigurationIdList=" + 10);
  }
}
