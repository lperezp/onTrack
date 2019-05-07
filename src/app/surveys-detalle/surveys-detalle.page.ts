import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-surveys-detalle',
  templateUrl: './surveys-detalle.page.html',
  styleUrls: ['./surveys-detalle.page.scss'],
})
export class SurveysDetallePage implements OnInit {
  label: any;

  constructor(private activeRoute : ActivatedRoute,private sanitizer: DomSanitizer) {
    this.label = sanitizer.bypassSecurityTrustHtml(this.activeRoute.snapshot.paramMap.get("label"));
   }

  ngOnInit() {
    console.log(this.label)
  }

}
