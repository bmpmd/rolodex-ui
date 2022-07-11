import { Address } from './../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { ClientMessage } from '../models/client-message';

//injectable allows us to use a *singleton* instance  of this class within other components 
//entire purpose of this class is to make http requests to our server 

//WHERE am i making the requests? 
// in environments/environments.ts, correlate the context we give the boot application 
//then we can 

// http://localhost:5000/api/users
const userUrl = url + `/users`;//{url}/users to access the /users api call 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //add options as a property to resolve CORS errors ... 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  user: User = new User(0, ``, ``, ``, ``, ``, []);
  address: Address = new Address('', '', '', '', '');
  clientMessage : ClientMessage = new ClientMessage("");


  //piggyback off of the http client 
  //inserting into constructor 
  // MUST IMPORT IN APP.MODULE.TS!!! 
  // then we can finally import here 
  constructor(private http: HttpClient) { }

  


  // return type is An array of Users
  // observable type: overtime, data will be returned. as the data comes thru, we need to Subscribe to it to process 
  // params are the urerUrl we do the Get HTTP request at, and the http options 
  
  //any method that invokes this, must subscribe to return the value 
  findAllUsers(): Observable<User[]>{ 
    return this.http.get<User[]>(userUrl, this.httpOptions)//add return type 
      .pipe(catchError(this.handleError)) // similar to fetch API: its async. observable.pipe is to the .then in fetch api calls... 

  }


  //callback function! 
  //
  private handleError(httpError: HttpErrorResponse){
    if(httpError.error instanceof ErrorEvent){
      console.log('an error occurred: ', httpError.error.message);
    }
    else{
      console.error(`
      Backend returned code ${httpError.status}
      body was: ${httpError.error}
      
      `)
    }

    return throwError( () => new Error("something really bad happened...") );
  }

  registerUser(user: User): Observable<User>{
    // 3 params for post: url, requestBody, options (headers)
    return this.http.post<User>(`${userUrl}/add`, user, this.httpOptions)// is already returned 
      .pipe(catchError(this.handleError))
  }



}
