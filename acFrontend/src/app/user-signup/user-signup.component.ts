import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
angform:FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataservice: DataService,
    private route: Router

  ) {
    this.angform = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',Validators.required],
      phone : ['',Validators.required],
      username : ['',Validators.required],
      password : ['',Validators.required],
      passwordAgain : ['',Validators.required],
    
    })
   }

  ngOnInit(): void {
  }
  postdata(data:any){
    this.dataservice.addUser(this.angform.value).subscribe(data=>{
      this.route.navigate(['user-login'])
    })
  }
}
