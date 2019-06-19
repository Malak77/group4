import { Component, OnInit , } from '@angular/core';
import {NgForm}  from '@angular/forms';
import {ChatServiceService} from '../chat-service.service';
@Component({
  selector: 'app-chat-compo',
  templateUrl: './chat-compo.component.html',
  styleUrls: ['./chat-compo.component.css']
})
export class ChatCompoComponent implements OnInit {

      getMessages:any;
       delay=1000;
       messages:[];
  constructor(private chatService :ChatServiceService) {
    this.messages=[]; 
    setInterval(()=>{
      this.getUsersDetailsMessages();
    },this.delay);
  }

  ngOnInit() {

  }


  postChat(chatFormDetails){
    this.chatService.postToServer(chatFormDetails.value.username,chatFormDetails.value.message);
  }


  async getUsersDetailsMessages(){
    
   this.messages= await this.chatService.getMessages();
  }


  
  deleteMessage(event){
    this.chatService.deleteMessage(event.target.id);
  }



}
