export class ChatThread {
    id: number;
    sender: number;
    receiver: number;
    product: number;
    username : string;
    lastMessageDate: Date;
    last_message: string;
    product_name :string
   
  
    constructor(id: number, username:string,sender: number, receiver_username: any,product_name:string, product: number, lastMessage: string, lastMessageDate: Date) {
      this.id = id;
      this.username =username;
      this.receiver = receiver_username;
      this.product = product;
      this.last_message = lastMessage;
      this.lastMessageDate = lastMessageDate;
      this.sender = sender
      this.product_name = product_name
    }
  }
  