import { Router } from '@angular/router';
import { Sellproduct } from './sellproduct';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SellproductService {
  private apiUrl = 'http://127.0.0.1:8000/seller/sell/';
  private productData!: Sellproduct;
  private productId:any

  constructor(private http: HttpClient,private router:Router) {
   
   }

  saveProduct(formData :FormData) {
    return this.http.post<Sellproduct>(this.apiUrl, formData);
  
  }
  listProducts(){
    return this.http.get<Sellproduct>(this.apiUrl);
  }


  setData(productId: number) {
    this.productId = productId;
  }

    
  getData() {
    return this.productId;
  }

  getProduct() {
    return this.http.get<Sellproduct>(`${this.apiUrl}${this.productId}/`);
  }
  
 
  


}


