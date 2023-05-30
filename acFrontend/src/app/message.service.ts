import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatThread } from './ChatThread';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:8000/chat/';

  constructor(private http: HttpClient) { }
  getMessages(sender: number, receiver: number, product: number): Observable<any> {
    return this.http.get(`${this.apiUrl}messages/${sender}/${receiver}/${product}`);
  }
  

  sendMessage(sender: number, receiver: number, product: number, text: string): Observable<any> {
    const body = {
      sender: sender,
      receiver: receiver,
      product: product,
      text: text
    };
    return this.http.post(this.apiUrl + 'messages/', body);
  }
  getChatThreads(userId: number): Observable<ChatThread[]> {
    const url = `${this.apiUrl}inbox/${userId}/`;
    return this.http.get<ChatThread[]>(url);
  }
  
  

}
