import { Component, OnInit } from '@angular/core';
import { OtsPendientesService } from '../services/ots/ots-pendientes/ots-pendientes.service';

@Component({
  selector: 'app-survey-fallo',
  templateUrl: './survey-fallo.page.html',
  styleUrls: ['./survey-fallo.page.scss'],
})
export class SurveyFalloPage implements OnInit {
  data: any;
  surveys: any;
  attribute_values: any;

  constructor(private otsService: OtsPendientesService) { }

  ngOnInit() {
    this.getSurveyFail();
  }

  getSurveyFail() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.surveys = this.data["surveys"];
      this.attribute_values = this.data["attribute_values"];
      console.log(this.surveys);
      console.log(this.attribute_values);
    });
  }
}
