import { Injectable } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
      url:string;
      port:number;
      messagesArray:[]
  constructor() {
    this.url="http://localhost:";
    this.port=5555;
    this.messagesArray=[];
   }

      postToServer(username,message){
        fetch(this.url+this.port,{
              method:'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                username:username,
                message:message
              })


        }).then(data=>console.log(data))
        .catch(error=>console.log(error));


      }


        async getUsersDetailsMessages(){
         fetch(this.url+this.port).then(async data=>await data.json())
    .then(response=>{
      this.messagesArray=  response.chat;
    } )
    .catch(error=>console.log(error));


  }

      async getMessages(){
        await this.getUsersDetailsMessages();
        console.log(this.getMessages);

        return this.messagesArray;
      }

      deleteMessage(id){
        fetch(this.url+this.port+"/?"+id,{
          method: 'DELETE'
        }).then(async data=> await data.json()).then(response=>
          console.log(response))
          .catch(err=>console.log(err))

      }


      
}
