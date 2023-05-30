import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class DataService {
API_URL = 'http://127.0.0.1:8000/users/users/'
  constructor(private http:HttpClient) { }
  addUser(data:any){
    return this.http.post<Users>(this.API_URL,data);

  }
  
}
