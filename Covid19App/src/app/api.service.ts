import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url_api='https://api.covid19api.com/dayone/country/timor-leste'
  constructor(private httpClient: HttpClient) { }

  public getRequestApi(){
    return this.httpClient.get(this.url_api);
  }
}
