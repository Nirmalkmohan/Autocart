import { UserService } from './../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages!: any[];
  user_id :any
  productID: any
  newMessage!: string;
  product:any



  constructor(
    private messageService: MessageService,
    private CookieService:CookieService,
    private UserService:UserService,
    ) { }

  ngOnInit(): void {
    this.user_id =parseInt(this.CookieService.get('user_id'));
    console.log(this.user_id)

    this.product=this.UserService.getSellerData()
    console.log(this.product.user)

    this.messageService.getMessages(this.user_id,this.product.user,this.product.id).subscribe((messages: any[]) => {
      this.messages = messages;
      console.log(this.messages)
    });
  
  }

  onSubmit() {
    const sender =parseInt(this.CookieService.get('user_id')) ;
    const receiver = parseInt(this.product.user)
    console.log(receiver)
    const product = parseInt(this.product.id)
    const text = this.newMessage;
    this.messageService.sendMessage(sender, receiver, product, text).subscribe(() => {
      this.newMessage='';
      console.log(this.newMessage)
      this.ngOnInit();
    });
    
  }
  
  }
  
