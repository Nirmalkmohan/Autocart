import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserLoginComponent } from './user-login/user-login.component';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedIn = false;
  dialogRef!: MatDialogRef<UserLoginComponent>;
  constructor(public dialog: MatDialog,) { }
  login(): void {
    this.loggedIn = true;
    // Code to handle login process and set loggedIn to true
  }
  logout(): void {
    this.loggedIn = false;

    // Code to handle logout process and set loggedIn to false
  }


  
  openDialog(): void {
    this.dialogRef = this.dialog.open(UserLoginComponent, {
      width: '400px',
      disableClose: true // Prevent the dialog from being closed by clicking outside
    });
  
    // Pass the dialogRef instance to the UserLoginComponent
    this.dialogRef.componentInstance.dialogRef = this.dialogRef;
  }
  
}
