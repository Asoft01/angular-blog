import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  name = 'Adeleke';
  // getName(){
  //   return "Hammed"
  // }

  getName(){
    return this.name
  }
  obj ={
    name: 'kelly',
    age: 20
  }

  arr= ['bruce', 'tony', 'peterr']
  siteUrl = window.location.href
}
