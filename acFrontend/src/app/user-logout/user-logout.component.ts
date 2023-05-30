import { UserAuthService } from './../user-auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './../user.service';
import { Users } from './../users';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<UserLogoutComponent>,
    private UserService:UserService,
    private CookieService:CookieService,
    private UserAuthService:UserAuthService
    
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  logout(): void {
    // Clear the logged in user data and navigate to the login page
    localStorage.removeItem('loggedInUser');
    this.CookieService.delete('user_id');
    this.UserService.logout()
    console.log(this.UserAuthService.loggedIn)

    this.UserAuthService.logout()
   
    if (!this.UserAuthService.loggedIn) {
      // The value of the user_id cookie is falsy or an empty string, which means the user is not logged in
      setTimeout(() => {
        this.UserAuthService.openDialog();
      }, 3000);
    }
    console.log(this.UserAuthService.loggedIn)

    // Close the dialog
    this.dialogRef.close();
  }

}

