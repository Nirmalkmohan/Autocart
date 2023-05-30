import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class MyadsService {
  private apiUrl = 'http://127.0.0.1:8000/seller/sell/ads/';
  constructor(private http: HttpClient) { }
  getMyAds(id: number): Observable<Ad[]> {
    const url = `${this.apiUrl}?user=${id}`;
    return this.http.get<any>(url);
  }
}


