import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private apiURL = 'https://v6.exchangerate-api.com/v6/';
  private apiKey = '60a87c8719db17b9538c1672'

  constructor(private http: HttpClient) { }

  getCurrenciesNames(): Observable<any> {
    return this.http.get(`${this.apiURL}${this.apiKey}/codes`);
  }

  getExchanRate(base: string, target: string, amount?: number): Observable<any> {
    let url = `${this.apiURL}${this.apiKey}/pair/${base}/${target}`;
    if (amount) {
      url+= `/${amount}`;
    }
    return this.http.get(url);
  }
}
