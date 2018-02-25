import { Component, OnInit, OnDestroy } from '@angular/core';
import * as io from 'socket.io-client';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';





@Component({
  selector: 'app-user-chat-msg',
  templateUrl: './user-chat-msg.component.html',
  styleUrls: ['./user-chat-msg.component.css']
})
export class UserChatMsgComponent implements OnInit {
  // public user
  // public items
  // public allMessages
  // public size
  // constructor(private userServ:ChatAppServiceService, private route: ActivatedRoute,
  // private router: Router ) { 
  // 	this.user = {};
  //   this.allMessages = [];
    
  //   this.getAllMessages();
  // }


  // getAllMessages(){
  //   this.userServ.getMessages()
  //   .then(data => {
  //       this.allMessages = data;
  //        this.size = this.allMessages.length

  //   })
  //   .catch(err =>{
  //     console.log('Get All Authorization ')
  //   })
  // }
    
  //   chatUser(){
  //      this.userServ.chatMsg(this.user)
  //      .then((data: any)=> {
  //         this.allMessages.push(data.doc)
  //         this.size = this.allMessages.length;
  //      })
  //      .catch(err => {
  //      	console.log('chat error Authorization');
  //      })
  //   }



  // ngOnInit() {
  // }
private url = 'http://localhost:8000';
  private socket;

  messages = [];
  connection;
  message;

  constructor(private userAuth: AuthGuardService, private router: Router, private route: ActivatedRoute) { }

  sendMessage(){
    this.socket.emit('message', this.message);
    
  }

 

  ngOnInit() {
    this.socket = io(this.url);
   this.socket.on('return message', (data) => {
      this.messages.push(data)
      return data
      })
  }

 ngOnDestroy(){
   console.log('logout -', this.connection.unsubscrib)
    this.connection.unsubscrib
}
}
