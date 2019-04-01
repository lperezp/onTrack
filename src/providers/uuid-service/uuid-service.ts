import { Injectable } from '@angular/core';

/*
  Generated class for the UuidServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UuidServiceProvider {
  public UUID: number;
  constructor() {
    this.UUID = 123456789123456;
    console.log('Este es tu UUID: ',this.UUID);
  }

}
