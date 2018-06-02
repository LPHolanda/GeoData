import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  private baseApiPath = 'https://restcountries.eu/rest/v2/';

  constructor(public http: Http) {
    console.log('Hello PaisProvider Provider');
  }

  getPaisesByContinente(continente:string){
    return this.http.get(this.baseApiPath + 'region/' + continente);
  }
}
