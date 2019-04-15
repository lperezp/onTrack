import { Injectable } from "@angular/core";

/*
  Generated class for the UuidServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UuidServiceProvider {
  public UUID: any;
  constructor() {
    this.UUID = "123 - 456 - 789 - 123 - 456";
    console.log("Este es tu UUID: ", this.UUID);
  }
}
