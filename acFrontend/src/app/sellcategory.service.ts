import { Sellcategory } from './sellcategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SellcategoryService {

    API_URL = 'http://127.0.0.1:8000/seller/sellcategory/'
    constructor(private http:HttpClient) { }
      
  getCategory(){
    return this.http.get<Sellcategory>(this.API_URL);
  }

  
  }

  

