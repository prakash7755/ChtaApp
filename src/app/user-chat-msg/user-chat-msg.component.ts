import { Component, OnInit } from '@angular/core';
import { ChatAppServiceService } from '../services/chat-app-service/chat-app-service.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-chat-msg',
  templateUrl: './user-chat-msg.component.html',
  styleUrls: ['./user-chat-msg.component.css']
})
export class UserChatMsgComponent implements OnInit {
  public user
  public items
  public allMessages
  public size
  constructor(private userServ:ChatAppServiceService, private route: ActivatedRoute,
  private router: Router ) { 
  	this.user = {};
    this.allMessages = [];
    
    this.getAllMessages();
  }


  getAllMessages(){
    this.userServ.getMessages()
    .then(data => {
        this.allMessages = data;
         this.size = this.allMessages.length

    })
    .catch(err =>{
      console.log('Get All Authorization ')
    })
  }
    
    chatUser(){
       this.userServ.chatMsg(this.user)
       .then((data: any)=> {
          this.allMessages.push(data.doc)
          this.size = this.allMessages.length;
       })
       .catch(err => {
       	console.log('chat error Authorization');
       })
    }



  ngOnInit() {
  }

}
