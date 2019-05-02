import { DataService } from "./../data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OtsService {
  constructor(private dataService: DataService) {}

  getAllOTS(user_configurations_id) {
    return this.dataService.get("jobs/search?userConfigurationIdList=" + user_configurations_id);
  }
}
