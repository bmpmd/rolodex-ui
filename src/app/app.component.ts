import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rolodex UI';

  //make it public to ALL components in the app 
  // so that our login component can toggle this 
  // how? i must inject it into my login component in its constructor 
  public isLoggedIn: boolean = false;

  //AND THE USERNAME!!! 
  username: string = "";
  // update the user name (userinfo) based on whoever is stored in the session

  updateUserData(username:string): void{

    //this will set the app prop to username 
    this.username = username; 
  }

  //flush the browser's session when we sign out 
  signOut():void{
    window.location.reload();
  }
}