import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys-detalle',
  templateUrl: './surveys-detalle.page.html',
  styleUrls: ['./surveys-detalle.page.scss'],
})
export class SurveysDetallePage implements OnInit {
  label: any;

  constructor(private activeRoute : ActivatedRoute) {
    this.label = this.activeRoute.snapshot.paramMap.get("label")  }

  ngOnInit() {
    console.log(this.label)
  }

}
