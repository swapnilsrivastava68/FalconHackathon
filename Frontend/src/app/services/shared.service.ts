import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl: string = 'https://virtserver.swaggerhub.com/PrashantJaiswal17/MyTestAccount/1.0.0';

  constructor(private http: HttpClient) { }

  getUsages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usage`);
  }

  getCountries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countries`);
  }

}
