import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskFront';
  constructor(private router: Router){}
  
  // clickToHome(){
  //   this.router.navigate(['/']);
  
  // }
  // clickToMap(){
  //   this.router.navigate(['/app-map']);
  
  // }
}