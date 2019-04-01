import { ServiceApiProvider } from './../../providers/service-api/service-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})

export class FormPage {
 encuestas : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService : ServiceApiProvider) {
  }

  ngOnInit() {
    this.getAllServices();
  }
  getAllServices(){
    this.apiService.getEncuestas().subscribe(res =>{
      this.encuestas= res['survey_metadata'];
      console.log(this.encuestas);
    })
  }
}
