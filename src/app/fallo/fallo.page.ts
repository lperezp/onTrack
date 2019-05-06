import { Component, OnInit } from '@angular/core';
import { OtsPendientesService } from '../services/ots/ots-pendientes/ots-pendientes.service';

@Component({
  selector: 'app-fallo',
  templateUrl: './fallo.page.html',
  styleUrls: ['./fallo.page.scss'],
})
export class FalloPage implements OnInit {
  data: any;
  surveys: any;
  text: any;
  constructor(private otsService: OtsPendientesService) { }

  ngOnInit() {
    this.getSurveyFail();
  }

  getSurveyFail() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.surveys = this.data["surveys"];
      this.text = this.surveys[0].domain_name;
      console.log(this.surveys[0].domain_name);
      console.log(this.surveys);
    });
  }
}
