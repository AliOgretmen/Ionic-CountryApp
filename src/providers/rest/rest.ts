import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl:string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'https://restcountries.eu/rest/v2/all'
    console.log('Hello RestProvider Provider');
  }
  getAllCountry(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
