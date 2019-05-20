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
      console.log(this.jobs);
      this.insertData();
    });
  }

  selectedOT(elemento) {
    this.router.navigate(["detalle", elemento.services_id]);
  }

  uploadStorage() {}

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
    let data = "";
    for (let i = 0; i < this.jobs.length; i++) {
      let data = this.jobs[i];
      this.taskService
        .createJobs(this.jobs[i])
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
