import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerimageService {
  private baseUrl = 'http://127.0.0.1:8000/seller/sell/';
  
  constructor(private http: HttpClient) { }


}





  
