import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";
import { OtsPendientesService } from "../services/ots/ots-pendientes/ots-pendientes.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-surveys",
  templateUrl: "./surveys.page.html",
  styleUrls: ["./surveys.page.scss"]
})
export class SurveysPage implements OnInit {
  data: any;
  surveys: any;
  text: any;
  attributes_id: any;
  widget_type: any;
  result: string = "";
  constructor(private otsService: OtsPendientesService, private router: Router) {}

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.surveys = this.data["surveys"];
      this.text = this.surveys[0].domain_name;
      console.log(this.surveys[0].domain_name);
      console.log(this.surveys);
    });
  }

  openSurvey(elemento) {
    console.log("SURVEY", elemento);
    for (let i = 0; i < elemento.groups.length; i++) {
      for (let ii = 0; ii < elemento.groups[i].attributes.length; ii++) {
        console.log(
          "ATRIBUTOS_ID",
          elemento.groups[i].attributes[ii].attributes_id
        );
        console.log(
          "widget_type",
          elemento.groups[i].attributes[ii].widget_type
        );
        let label = "";
        label = `<label>${
          elemento.groups[i].attributes[ii].attributes_name
        }</label><br>`;
        this.result = this.result + label;
      }
    }
    this.router.navigate([
      "surveys-detalle",this.result]);
  }
}
