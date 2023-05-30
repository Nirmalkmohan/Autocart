import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './../user-auth.service';
import { UserService } from './../user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Output() loginSuccess = new EventEmitter<boolean>();

  username: string = '';
  password: string = '';
  showLoginForm = true;
  dialogRef!: MatDialogRef<UserLoginComponent>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private userAuthService: UserAuthService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const data = { username: this.username, password: this.password };
    this.http.post('http://127.0.0.1:8000/users/login/', data).subscribe(
      (response: any) => {
        const user_id = response.user_id;

        // Store user id in cookies
        this.cookieService.set('user_id', user_id);

        // Store user data in local storage
        this.userService.setLoggedInUser(data);

        // Set user as logged in
        this.userAuthService.login();
        console.log(this.userAuthService.loggedIn)

        // Emit login success event
        this.loginSuccess.emit(true);

        // Hide the login form
        this.showLoginForm = false;
        // Close the dialog if it is defined
        if (this.dialogRef) {
          this.dialogRef.close();
          console.log('ok')
        }

        
        
        this.router.navigate(['']);
      },
      (error) => {
        // Handle login error
      }
    );
  }
}
