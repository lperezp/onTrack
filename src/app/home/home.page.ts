import { LoginService } from "./../services/data/login/login.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  uuid: number = 123456789123456;
  respuesta: any;
  constructor(private loginService: LoginService) {}
  signin() {
    this.loginService.signin(this.uuid).then(data => {
      this.respuesta = data.data;
      console.log(data);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
  }
}
/*  
switch(widget_type) { 
   case 'RadioGroup': { 
      '<input type="radio">'
      break; 
   },
   case 'TextView': { 
      '<input type="text">' 
      break; 
   },
   case 'MultilineText': { 
      '<textarea></textarea>' 
      break; 
   },
   case CheckGroup: { 
      '<input type="checkbox">' 
      break; 
   }
}   */