import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { OtsPendientesService } from "../services/ots/ots-pendientes/ots-pendientes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-surveys",
  templateUrl: "./surveys.page.html",
  styleUrls: ["./surveys.page.scss"]
})
export class SurveysPage implements OnInit {
  data: any;
  surveys: any;
  attributes_id: any;
  widget_type: any;
  result: string = "";
  attribute_values: any;
  evidence_configurations: any;
  image: string;
  domains_id: any;
  survey: any = Array();
  constructor(
    private otsService: OtsPendientesService,
    private router: Router,
    private camera: Camera,
    private activeRoute: ActivatedRoute
  ) {
    this.domains_id = "";
    this.result = "";
    this.domains_id = this.activeRoute.snapshot.paramMap.get("domains_id");
    console.log("recibi", this.domains_id);
    this.getSurveys();
  }

  ngOnInit() {
    this.result = "";
  }

  getSurveys() {
    this.otsService.getOTSPendientes().then(data => {
      console.log("DOMA", this.domains_id);
      this.data = JSON.parse(data.data);
      this.survey = this.data["surveys"];
      for (let ii = 0; ii < this.survey.length; ii++) {
        if (this.domains_id == this.survey[ii].domains_id) {
          this.surveys = this.survey[ii];
          console.log("RESULTADO", this.surveys);
        }
      }

      this.attribute_values = this.data["attribute_values"];
      this.evidence_configurations = this.data["evidence_configurations"];
      console.log(this.evidence_configurations);
      for (let a = 0; a < this.evidence_configurations.length; a++) {
        console.log("EVIDENCIAS", this.evidence_configurations[a].domains_name);
      }
    });
  }

  openSurvey(elemento) {
    let tipo = "";
    let x = "";
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
        for (let iii = 0; iii < this.attribute_values.length; iii++) {
          if (
            this.attribute_values[iii].attributes_id ==
            elemento.groups[i].attributes[ii].attributes_id
          ) {
            console.log("Igual", this.attribute_values[iii].attributes_id);
            for (let c = 0; c < this.attribute_values[iii].values.length; c++) {
              console.log("valores", this.attribute_values[iii].values[c].code);
            }
          }
        }

        switch (elemento.groups[i].attributes[ii].widget_type) {
          case "RadioGroup": {
            x = "";
            tipo = "";
            for (let iii = 0; iii < this.attribute_values.length; iii++) {
              if (
                this.attribute_values[iii].attributes_id ==
                elemento.groups[i].attributes[ii].attributes_id
              ) {
                console.log("Igual", this.attribute_values[iii].attributes_id);
                for (
                  let c = 0;
                  c < this.attribute_values[iii].values.length;
                  c++
                ) {
                  console.log(
                    "valores",
                    this.attribute_values[iii].values[c].code
                  );
                  x = `<div class="form-check"><input class="form-check-input" type="radio" name="${
                    this.attribute_values[iii].attributes_id
                  }" value="${
                    this.attribute_values[iii].values[c].value
                  }"><label class="form-check-label">${
                    this.attribute_values[iii].values[c].code
                  }</label></div>`;
                  tipo = tipo + x;
                }
              }
            }
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
            x = "";
            tipo = "";
            for (let iii = 0; iii < this.attribute_values.length; iii++) {
              if (
                this.attribute_values[iii].attributes_id ==
                elemento.groups[i].attributes[ii].attributes_id
              ) {
                console.log("Igual", this.attribute_values[iii].attributes_id);
                for (
                  let c = 0;
                  c < this.attribute_values[iii].values.length;
                  c++
                ) {
                  console.log(
                    "valores",
                    this.attribute_values[iii].values[c].code
                  );
                  x = `<div class="form-check"><input class="form-check-input" type="checkbox" name="${
                    this.attribute_values[iii].attributes_id
                  }" value="${
                    this.attribute_values[iii].values[c].value
                  }"><label class="form-check-label">${
                    this.attribute_values[iii].values[c].code
                  }</label></div>`;
                  tipo = tipo + x;
                }
              }
            }
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

  getCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
}
