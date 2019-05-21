import { TaskSQLiteService } from "./../services/storage/taskSQLite/task-sqlite.service";
import { OtsPendientesService } from "./../services/ots/ots-pendientes/ots-pendientes.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ots-pendientes",
  templateUrl: "./ots-pendientes.page.html",
  styleUrls: ["./ots-pendientes.page.scss"]
})
export class OtsPendientesPage implements OnInit {
  data: any;
  jobs: any;
  tasks: any[] = [];
  services: any;
  surveys: any;
  attribute_values: any;
  evidence_configurations: any;
  info_request: any;
  constructor(
    private otsService: OtsPendientesService,
    private router: Router,
    private taskService: TaskSQLiteService
  ) {}

  ngOnInit() {
    this.getOTSPendientes();
  }

  getOTSPendientes() {
    this.otsService.getOTSPendientes().then(data => {
      this.data = JSON.parse(data.data);
      console.log("Resultado", this.data);
      this.jobs = this.data["jobs"];
      this.services = this.data["jobs"];
      this.surveys = this.data["surveys"];
      this.info_request = this.data["info_request"];
      this.attribute_values = this.data["attribute_values"];
      this.evidence_configurations = this.data["evidence_configurations"];
      console.log(this.jobs);
      this.insertData();
    });
  }

  selectedOT(elemento) {
    this.router.navigate(["detalle", elemento.services_id]);
  }

  // DATABASE
  getAllTasks() {
    this.taskService
      .getAllJobs()
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch(error => {
        console.error(error);
      });
  }

  insertData() {
    this.insertDataJobs();
    this.insertDataServices();
    this.insertDatatSurveys();
    this.insertDataAttributeValue();
    this.insertDataEvidence();
  }

  insertDataJobs() {
    for (let i = 0; i < this.jobs.length; i++) {
      let data = this.jobs[i];
      this.taskService
        .insertJobs(this.jobs[i])
        .then(response => {
          this.tasks.unshift(data);
          /* console.log(response); */
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  insertDataServices() {
    for (let i = 0; i < this.services.length; i++) {
      let data = this.services[i];
      this.taskService
        .insertServices(this.services[i])
        .then(response => {
          this.tasks.unshift(data);
          /* console.log(response); */
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  insertDatatSurveys() {
    for (let i = 0; i < this.surveys.length; i++) {
      let data = this.surveys[i];
      this.taskService
        .insertSurveys(this.surveys[i])
        .then(response => {
          this.tasks.unshift(data);
          /* console.log(response); */
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  insertDataAttributeValue() {
    for (let i = 0; i < this.attribute_values.length; i++) {
      let data = this.attribute_values[i];
      this.taskService
        .insertAttributeValue(this.attribute_values[i])
        .then(response => {
          this.tasks.unshift(data);
          /* console.log(response); */
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  insertDataEvidence() {
    for (let i = 0; i < this.evidence_configurations.length; i++) {
      let data = this.evidence_configurations[i];
      this.taskService
        .insertEvidence(this.evidence_configurations[i])
        .then(response => {
          this.tasks.unshift(data);
          /* console.log(response); */
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  insertDataInfoRequest() {
    for (let i = 0; i < this.jobs.length; i++) {
      let data = this.info_request[i];
      this.taskService
        .insertInfoRequest(this.info_request[i])
        .then(response => {
          this.tasks.unshift(data);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
