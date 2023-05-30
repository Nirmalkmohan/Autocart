import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserAuthService } from './../user-auth.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor(
  
    private router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,
    
    private CookieService:CookieService,
  ) {}

  navigateMarket() {  
    this.router.navigate(['marketplace']);
    // this.userService.setIsSeller(false);
  }

  ngOnInit(): void {
    if (!this.userAuthService.loggedIn) {
      // The value of the user_id cookie is falsy or an empty string, which means the user is not logged in
      setTimeout(() => {
        this.userAuthService.openDialog();
      }, 3000);
    }

    
    
    
    }

 

  
 

    
      // Subscribe to the afterClosed event of the dialog to remove the unwanted element
    //   this.dialogRef.afterClosed().subscribe(() => {
    //     const matDialogContainer = document.querySelector('mat-dialog-container');
    //     if (matDialogContainer) {
    //       matDialogContainer.remove();
    //     }
    //   });
    // }
  
}