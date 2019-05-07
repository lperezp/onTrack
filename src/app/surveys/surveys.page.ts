import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { OtsPendientesService } from "../services/ots/ots-pendientes/ots-pendientes.service";
import { Router } from "@angular/router";

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
  constructor(
    private otsService: OtsPendientesService,
    private router: Router
  ) {
    this.result = "";
  }

  ngOnInit() {
    this.getSurveys();
    this.result = "";
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
    let tipo = "";
    this.result = "";
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

        switch (elemento.groups[i].attributes[ii].widget_type) {
          case "RadioGroup": {
            tipo = `<div><input  type="radio" /></div>`;
            break;
          }
          case "TextView": {
            tipo = `<div><input class ="form-control form-control-sm" type="text"/></div>`;
            break;
          }
          case "MultilineText": {
            tipo = `<div><textarea class="form-control form-control-sm"></textarea></div>`;
            break;
          }
          case "CheckGroup": {
            tipo = `<div><input type="checkbox" /></div>`;
            break;
          }
        }

        let label = "";
        label = `<label>${
          elemento.groups[i].attributes[ii].attributes_name
        }</label><br>`;
        this.result = this.result + label + tipo;
      }
    }
    this.router.navigate(["surveys-detalle", this.result]);
  }
}
