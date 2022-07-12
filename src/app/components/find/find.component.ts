import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ClientMessage } from 'src/app/models/client-message';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent{

  //fields
  userId:number = 0; 
  title:string = "Find User By ID";
  user:User = new User(0, '', '', '', '', '', []);
  clientMessage:ClientMessage = new ClientMessage("");

  constructor(private userService:UserService) { }
  
  findUser(){
    //call the user service's findUserById() method 
    //and pass thru id 
    //findbyuserid returns an observsable, so we must sub to it ! 

    this.userService.findUserById(this.userId) 
      .subscribe(
        data => {
          this.user = data;
          this.clientMessage.message = ""; // empty string bc nothing went wwrong 
        },
        ()=>{
          this.clientMessage.message = `Can't find the User with ID  ${this.userId}` 
        }
      )
      

  }

}
