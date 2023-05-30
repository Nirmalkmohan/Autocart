import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isSeller : boolean = false;
  private loggedInUser: any;
  sellerData:any={};
  ysLoggedIn: boolean = false;

  private apiUrl = 'http://127.0.0.1:8000/users/users';
  constructor(private http: HttpClient,
    private UserAuthService:UserAuthService,
    private router:Router) {
    // Retrieve the user from session storage if available
    const user = sessionStorage.getItem('loggedInUser');
    if (user) {
      this.loggedInUser = JSON.parse(user);
    }
  }

  
  setLoggedInUser(user_data: any): void {
    this.loggedInUser = user_data;
    sessionStorage.setItem('loggedInUser', JSON.stringify(user_data));
  }

  getLoggedInUser(): any {
   ;
    if (!this.loggedInUser) {
      this.router.navigate(['user-login']);
    } else {
   
    }
    return this.loggedInUser
  }
  

  getCurrentUser(): any {
    return this.getLoggedInUser();
  }

  isLoggedIn(): boolean {
    return !!this.getLoggedInUser();
  }

  setSellerData(product: any): void {
    this.sellerData = product;
  }

  getSellerData(): any {
    return this.sellerData;
  }


  logout(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/users/logout/', {});
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/`);
  }
}
