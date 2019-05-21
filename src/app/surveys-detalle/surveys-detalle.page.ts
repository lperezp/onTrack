import { JobsInterface } from "./../models/jobs-interface";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-surveys-detalle",
  templateUrl: "./surveys-detalle.page.html",
  styleUrls: ["./surveys-detalle.page.scss"]
})
export class SurveysDetallePage implements OnInit {
  label: any;
  jobs: JobsInterface;
  fecha = Date.now();
  constructor(
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.label = sanitizer.bypassSecurityTrustHtml(
      this.activeRoute.snapshot.paramMap.get("label")
    );
  }

  ngOnInit() {
    console.log(this.label);
  }

  saveJobs() {
    /* VALIDAR EL USER_ID */
    let data = `{
	 user_id : ${this.jobs.jobs_id}, 
	 job_id :  ${this.jobs.jobs_id},
	 status :{
		 updated_at :  ${this.fecha},
		 status_color :  #ff0000 ,
		 status_sequence : 2,
		 status_id : 3,
		 status_name :  En Camino ,
		 latitude :  -12.1054319 ,
		 longitude :  -76.9550933 ,
		 reason_name :   ,
		 reason :   ,
		 is_failed : 1,
		 is_completed : 0,
		 template_id : 7
	},
	 evidences :[
		{
			 group_name :  foto lateral ,
			 info_request_sequence : 2,
			 image_sequence : 1,
			 image :  {job-id}-{guid}.jpg ,
			 thumbnail :  {job-id}-{guid}-thumbnail.jpg ,
			 size_kb :  12.5 ,
			 evidenced_at :  2018-07-29 14:10:45 
		},
		{
			 group_name :  foto lateral ,
			 info_request_sequence : 2,
			 image_sequence : 2,
			 image :  {job-id}-{guid}.jpg ,
			 thumbnail :  {job-id}-{guid}-thumbnail.jpg ,
			 size_kb :  12.5 ,
			 evidenced_at :  2018-07-29 14:12:45 
		},
		{
			 group_name :  foto lateral ,
			 info_request_sequence : 2,
			 image_sequence : 1,
			 image :  {job-id}-{guid}.jpg ,
			 thumbnail :  {job-id}-{guid}-thumbnail.jpg ,
			 size_kb :  12.5 ,
			 evidenced_at :  2018-07-29 14:14:45 
		}
	],
	 forms :[
		 {
			 domain_id : 13,
			 executed_at :  2018-07-29 15:00:05 ,
			 instance_name :  EWO ,
			 status : null,
			 sequence : 1,
			 groups : [
				{
					 name :  General ,
					 attributes : [
						{
							 id :  1 ,
							 name :  nombre_receptor ,
							 value :  Juan Gutierrez ,
							 type :  string 
						},
						{
							 id :  2 ,
							 name :  DNI ,
							 value :  10691389 ,
							 type :  Numeric 
						},
						{
							 id :  3 ,
							 name :  attribute_name_3 ,
							 value :  attribute_value_3 ,
							 type :  numeric 
						}
					]
				},
				{
					 name :  Mantenimiento ,
					 attributes : [
						{
							 id :  4 ,
							 name :  attribute_name_1 ,
							 value :  attribute_value_1 ,
							 type :  string 
						},
						{
							 id :  5 ,
							 name :  attribute_name_2 ,
							 value :  attribute_value_2 ,
							 type :  boolean 
						},
						{
							 id :  6 ,
							 name :  attribute_name_3 ,
							 value :  attribute_value_3 ,
							 type :  numeric 
						}
					]
				}
			]
		 },
		 {
			 domain_id : 3,
			 executed_at :  2018-07-29 15:00:05 ,
			 instance_name :  EWO Mantenimiento Equipo de Frio ,
			 status : null,
			 sequence : 1,
			 groups : [
				{
					 name :  General ,
					 attributes : [
						{
							 id :  7 ,
							 name :  attribute_name_1 ,
							 value :  attribute_value_1 ,
							 type :  string 
						},
						{
							 id :  8 ,
							 name :  attribute_name_2 ,
							 value :  attribute_value_2 ,
							 type :  boolean 
						},
						{
							 id :  9 ,
							 name :  attribute_name_3 ,
							 value :  attribute_value_3 ,
							 type :  numeric 
						}
					]
				},
				{
					 name :  Mantenimiento ,
					 attributes : [
						{
							 id :  10 ,
							 name :  attribute_name_1 ,
							 value :  attribute_value_1 ,
							 type :  string 
						},
						{
							 id :  11 ,
							 name :  attribute_name_2 ,
							 value :  attribute_value_2 ,
							 type :  boolean 
						},
						{
							 id :  12 ,
							 name :  attribute_name_3 ,
							 value :  attribute_value_3 ,
							 type :  numeric 
						}
					]
				}
			]
		 }
	]
}`;
  }
}
