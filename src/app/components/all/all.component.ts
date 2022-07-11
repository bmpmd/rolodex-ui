import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = 'All Users'
  //need arr of users of type Users but we dont have that yet. 
  // 
  users: User[] = [];
  clientMessage: ClientMessage = new ClientMessage("Sorry, no users to display.");

  //later on we will inject a service into this constructor 
  //for our restful api calls 
  // new folder called models. make ts file called user.ts 
  // to build a class 
  constructor(private UserService: UserService) {

  }

  ngOnInit(): void {
    //when the component is init, invoke the method!! (fill up the users arr with uesrs from db )
    this.findAllUsers()
  }
  //components , models, and di in anugalr 
  //services folder does htis  
  //then in the services folder, generate service like a component!
  // ng g s user => ng generate service user!! 
  //      -> creates testing file and the service ts file. not using testintg there 
  findAllUsers() {
    // since userservice has the injectable tag on it we can insert here 
    this.UserService.findAllUsers()
      .subscribe(data => {
        this.users = data;//finally, with the data returned we set the users property equal to whatever it retunrs 
      })
  }

}
