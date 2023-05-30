import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class FilterCategoryService {


  private apiUrl = 'http://127.0.0.1:8000/seller/filter/';
  constructor(private http: HttpClient) { }
  filterCategory(id: number): Observable<Ad[]> {
    const url = `${this.apiUrl}?category=${id}`;
    return this.http.get<any>(url);
  }
}
