import { Component, OnInit } from "@angular/core";
import { OtsPendientesService } from "../services/ots/ots-pendientes/ots-pendientes.service";

@Component({
  selector: "app-survey-fallo",
  templateUrl: "./survey-fallo.page.html",
  styleUrls: ["./survey-fallo.page.scss"]
})
export class SurveyFalloPage implements OnInit {
  data: any;
  surveys: any;
  attribute_values: any;
  titulo: any;
  attributes_id: any;
  widget_type: any;
  tipoInput: string = "";

  constructor(private otsService: OtsPendientesService) {}

  ngOnInit() {
    this.getSurveyFail();
  }

  getSurveyFail() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.surveys = this.data["surveys"];
      this.titulo = this.surveys[0].groups[0].attributes[0].attributes_name;
      this.attributes_id = this.surveys[0].groups[0].attributes[0].attributes_id;
      this.widget_type = this.surveys[0].groups[0].attributes[0].widget_type;
      this.attribute_values = this.data["attribute_values"];
      console.log(this.surveys);
      console.log(this.titulo);
      console.log(this.attributes_id);
      console.log(this.widget_type);
      console.log(this.attribute_values);
    });
  }
}
