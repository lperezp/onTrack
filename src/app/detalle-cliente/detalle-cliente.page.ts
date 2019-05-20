import { ServicesInterface } from "./../models/services-interface";
import { JobsInterface } from "./../models/jobs-interface";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { OtsPendientesService } from "../services/ots/ots-pendientes/ots-pendientes.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-detalle-cliente",
  templateUrl: "./detalle-cliente.page.html",
  styleUrls: ["./detalle-cliente.page.scss"]
})
export class DetalleClientePage implements OnInit {
  services_id: any;
  cliente: ServicesInterface;
  services: any;
  jobs: JobsInterface;
  actual_status_sequence: number;
  clientee: any = Array();
  service_statuses_id: any;
  info_request: any;
  domains_id: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private camera: Camera,
    private otsService: OtsPendientesService,
    private router: Router,
    public toastController: ToastController
  ) {
    this.jobs = {
      user_configurations_id: null,
      companies_id: null,
      locations_id: null,
      jobs_id: null,
      job_sequence: "",
      job_legacy_code: "",
      job_schedule_date: "",
      job_turn: "",
      job_tag: "",
      job_alert: "",
      job_updated_at: "",
      customers_id: null,
      suppliers_id: null,
      services_id: null,
      service_name: "",
      origen_entity_id: "",
      origen_entity_code: "",
      origen_entity_name: "",
      origen_entity_info: "",
      origen_entity_taxpayer_code: "",
      origen_entity_taxpayer_info: "",
      origen_code: "",
      origen_name: "",
      origen_info: "",
      origen_address: "",
      origen_reference: "",
      origen_latitude: "",
      origen_longitude: "",
      origen_observations: "",
      origen_contact_fullname: "",
      origen_contact_job_title: "",
      origen_contact_telephone: "",
      destination_entity_id: null,
      destination_entity_code: "",
      destination_entity_name: "",
      destination_entity_info: "",
      destination_entity_taxpayer_code: "",
      destination_entity_taxpayer_info: "",
      destination_code: "",
      destination_name: "",
      destination_info: "",
      destination_address: "",
      destination_reference: "",
      destination_latitude: "",
      destination_longitude: "",
      destination_observations: "",
      destination_contact_fullname: "",
      destination_contact_job_title: "",
      destination_contact_telephone: "",
      product_name: "",
      actual_job_status_id: null,
      actual_status_colour: "",
      actual_status_sequence: null,
      actual_status_name: ""
    };
    this.cliente = {
      services_id: null,
      service_name: "",
      statuses: []
    };
    this.services_id = this.activeRoute.snapshot.paramMap.get("services_id");
    console.log(this.services_id);
    this.otsService.getOTSPendientes().then(data => {
      let res = JSON.parse(data.data);
      this.services = res["services"];
      let job = res["jobs"];
      this.info_request = res["info_request"];
      console.log("info_request", this.info_request);
      console.log("THIS.SERVICES", this.services);
      console.log("THIS.TAMANIO", this.services.length);
      for (let i = 0; i < this.services.length; i++) {
        if (this.services_id == this.services[i].services_id) {
          this.cliente = this.services[i];
          console.log("CLIENTE", this.cliente);
        }
        if (this.services_id == job[i].services_id) {
          this.jobs = job[i];
          console.log("jobs", this.jobs);
          this.actual_status_sequence = this.jobs.actual_status_sequence;
          console.log("actual_status_sequence", this.actual_status_sequence);
        }
        this.clientee = this.cliente;
        for (let i = 0; i < this.clientee["statuses"].length; i++) {
          if (
            this.actual_status_sequence == this.clientee.statuses[i].sequence
          ) {
            this.service_statuses_id = this.clientee.statuses[
              i
            ].service_statuses_id;
            console.log("service_statuses_id", this.service_statuses_id);
          }
        }
        for (let i = 0; i < this.info_request.length; i++) {
          if (
            this.service_statuses_id ==
            this.info_request[i].info_request_group_sequence
          ) {
            this.domains_id = this.info_request[i].domains_id;
            console.log("DOMAIN", this.domains_id);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.getServices();
  }

  getServices() {}

  getCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Cambio de estado.",
      duration: 2000
    });
    toast.present();
  }

  openOK() {
    console.log(this.domains_id);
    if (this.domains_id == null) {
      this.domains_id++;
      this.presentToast();
      this.router.navigate(["surveys", this.domains_id]);
    }
  }
}
