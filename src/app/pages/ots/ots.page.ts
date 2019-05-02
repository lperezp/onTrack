import { OtsService } from "./../../services/data/ots/ots.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ots",
  templateUrl: "./ots.page.html",
  styleUrls: ["./ots.page.scss"]
})
export class OtsPage implements OnInit {
  listaOTS: Object;

  constructor(private otsService: OtsService) {}

  ngOnInit() {
    /* this.getAllOTS(4); */
  }

/*   getAllOTS(user) {
    this.otsService.getAllOTS(user).subscribe(res => {
      this.listaOTS = res;
      console.log(this.listaOTS);
    });
  } */
}
