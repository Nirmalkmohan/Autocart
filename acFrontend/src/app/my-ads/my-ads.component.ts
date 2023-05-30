import { UserService } from './../user.service';
import { CookieService } from 'ngx-cookie-service';
import { MyadsService } from './../myads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  myAds: any[] = [];
  loggedInUser: any;
  user_id:any
  

  constructor(private myAdsService: MyadsService,private cookieService:CookieService, private UserService:UserService) { }

  ngOnInit(): void {
    this.loggedInUser = this.UserService.getLoggedInUser();
    console.log(this.loggedInUser)
    this.user_id =parseInt(this.cookieService.get('user_id'));
    console.log(this.user_id)
    // this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.getMyAds();
  }

  getMyAds(): void {
    this.myAdsService.getMyAds(this.user_id).subscribe((ads) => {
      this.myAds =ads
      console.log(this.myAds)
    });
  }
}
