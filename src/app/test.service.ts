import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  baseUrl: string = "https://localhost:5001/Authentication";
  baseUrl2: string = "https://localhost:5002/WeatherForecast";

  constructor(private http: HttpClient) { }

  testApi() {
    return this.http.get<any>(`${this.baseUrl}`, this.httpOptions).toPromise();
  }


  testApi2() {
    return this.http.get<any>(`${this.baseUrl2}`, this.httpOptions).toPromise();
  }

  testModerator() {
    return this.http.get<any>(`${this.baseUrl2}/ismoderator`, this.httpOptions).toPromise();
  }

  testAdmin() {
    return this.http.get<any>(`${this.baseUrl2}/isadmin`, this.httpOptions).toPromise();
  }

  testloggedout() {
    return this.http.get<any>(`${this.baseUrl2}/loggedout`, this.httpOptions).toPromise();
  }
}
