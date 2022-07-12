import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
AppComponent
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //1. set the props to empty strings 
  
  username: string = '';
  password: string = '';

  //use these in conjunction 
  loginErrMsg: string = '';
  isLoading: boolean = false; 

  //2. inject service AND app component 
  constructor(private authService:AuthService, private appComponent:AppComponent) { }

  //3. build login method 
  ngOnInit(): void {
  }

  //login method
  //pass thru the username & password from the template and 
  //call the auth service 
  login(){

    //1. check for empty values 
    if(!this.username.trim() || !this.password.trim()){
      this.loginErrMsg = "failed login: empty username/password.";
      return;
    }

    //2. call authService to hit the /login endpoint 
    //2a. set is loading = true 
    this.isLoading = true;
    //2b. subscribe to the observasble it returns 
    // need to pass in 2 callback functions as params 
    this.authService.login(this.username, this.password)
      .subscribe(
        //if successful, this is the callbakc that's invoked 
        (data) =>{
          this.isLoading = false;
          //build a token that we capture from the response's header (from spring)
          //use browsers session to store session info 
          const token = data.headers.get("rolodex-token")
          sessionStorage.setItem("token", token);

          //pass the property that the user is loggin in to the root component 
          //tell app component that we logged in: passing data btwn components 
          //USE DI!! open app components.
          this.appComponent.isLoggedIn = true; 
        
    
          //update user data on the screen (to be seen by other components)
          this.appComponent.updateUserData(data.body.username);
          // here im setting the username prop of the user object 


          
        },
        //comma, this is the callback thats invoked if we failed
        ()=>{

          this.isLoading = false; 
          this.loginErrMsg = "login failed ";
        }


      );

      //after we are done, clear the input fields 
      this.username = '';
      this.password = '';
    

  }

  
  
}
