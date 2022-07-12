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
  public isLoggedIn: boolean = false;
}