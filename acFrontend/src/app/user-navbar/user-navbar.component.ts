import { UserLogoutComponent } from './../user-logout/user-logout.component';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  user:any
  dialogRef!:MatDialogRef<UserLogoutComponent>;
  constructor(private dialog: MatDialog,private route : Router,private userAuthservice: UserAuthService,private UserService:UserService) { }

  ngOnInit(): void {
    
    this.user = this.UserService.getLoggedInUser()
    
  }

  

  // navigateSell() {  
   
  //     this.route.navigate(['sell']);
  
 
   
  // }

  openDialog(): void {
    this.dialogRef = this.dialog.open(UserLogoutComponent, {
      width: '250px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
