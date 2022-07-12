import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title="Rolodex UI";
  image="assets/network.png";

  // THIS IS HOW YOU INJECT ONTO THE USERNAME! 
  // public so we can access 
  constructor(public appComponent:AppComponent){}

}
