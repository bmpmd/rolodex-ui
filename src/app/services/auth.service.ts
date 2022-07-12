import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { User } from '../models/user';
/**
 * we need to make an http request to the auth controller of the API 
 * http://localhost:5000/api/login
 * 
 * we send a credentails objects ({username: "someone", password: "pass"})
 * this is sent to AuthController in spring, returns user and JWT token
 * 
 * this is a POST request. 
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //1. set options and login Url (from http)
  // this will be send as the header of the POST request 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  loginUrl = url + "/login"; // might need to import from environment here
  

  //2. injection happens here 
  constructor(private http: HttpClient) { }


  //3. write the method below 
  // takes in username and password(of type string) and returns Observable (colon after the method )
  // set observable type to Any to allow freedom of manipulating the data returend back 
  login(username: string, password:string):Observable<any>{

   
    // 1. set up payload (the body of the http request)
    const payload = {username, password};
    // 2.  return the this.http.post method 
    return this.http.post<any>(this.loginUrl, payload, {observe: "response"})
    
    
    // if options iss buggy pass in 
    //{observe: "response"} INSTEAD OF HTTP OPTIONS

    //you COULD add the .pipe() pipeline to return any errors 
    //like before in user service, but if you're quickly trying to build 
    //functionality this is fine 

  }
  //set up components 



}
