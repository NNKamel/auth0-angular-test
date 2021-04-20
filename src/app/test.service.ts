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

  constructor(private http: HttpClient) { }

  testApi() {
    return this.http.get<any>(`${this.baseUrl}`, this.httpOptions).toPromise();
  }
}
