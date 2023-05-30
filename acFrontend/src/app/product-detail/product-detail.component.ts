import { UserAuthService } from './../user-auth.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sellproduct } from '../sellproduct';
import { SellproductService } from '../sellproduct.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
data:any
product: any

  constructor(private userAuthservice:UserAuthService,private router: Router,private userService: UserService, private sellproductService: SellproductService) { }

  ngOnInit(): void {
  
      this.getProductDetails();
    
  }

  getProductDetails() {
    const productId = this.sellproductService.getData();
    this.sellproductService.getProduct().subscribe((product) => {
      this.product = product;
      console.log(this.product)
    });
  }
  
  openContactSeller(product:Sellproduct) {
    console.log('Clicked product:', product);
    this.userService.setSellerData(product);
    this.router.navigate(['chat']);
    // this.userService.setIsSeller(false);
    // if(this.userAuthservice.loggedIn){
    // this.router.navigate(['chat']);
    // }else{
    // this.router.navigate(['user-login']);
  // }
  }
}