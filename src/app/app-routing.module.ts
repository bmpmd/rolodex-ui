import { AllComponent } from './components/all/all.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//this is where our custom urls go 
const routes: Routes = [
  {path: "main", component:MainComponent}, // at http://localhost:4200/main, this component will be init
  {path: "all", component:AllComponent}, // make sure to import the component as this name 
  {path: "register", component:RegisterComponent},
  {path: '**', component:MainComponent} // wildcard goes at end so that it goes back to some main component as default 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
