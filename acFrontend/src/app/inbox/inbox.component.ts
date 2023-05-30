import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { ChatThread } from '../ChatThread';
import { Sellproduct } from '../sellproduct';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  threads: ChatThread[] = [];
  public product = {
    id: '',
    user: ''
  };
 

  constructor(private messageService: MessageService,
    private CookieService:CookieService,private UserService:UserService,private Router:Router ) { }

  ngOnInit(): void {
    // Call an API to get all chat threads for the current user
    const userId = parseInt(this.CookieService.get('user_id'));; 
    this.messageService.getChatThreads(userId).subscribe((threads: ChatThread[]) => {
      this.threads = threads;
      console.log(this.threads)
    });
  }
  openContactSeller(product:any) {
    console.log('Clicked product:', product.product_id);
    this.product.id =product.product_id
    this.product.user = product.receiver_username
    this.UserService.setSellerData(this.product);
    this.Router.navigate(['chat']);

}
}
