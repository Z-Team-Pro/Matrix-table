import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  exist:boolean;
  navigationSubscription;
  constructor( private routes:Router) { 
    console.log( 'Loaded');
    this.routes.events.subscribe(any=>{
      if(any instanceof NavigationEnd){
        console.log('ReNavigate Done');
      //check for cach and show/hide login or logout buttons here 
      //it will be always fired on the constractor on the first time  
       if(localStorage.getItem('user')){
         this.exist=true;
       }
       else{
         this.exist=false;
       }
      }
    })
  
  }
  

  ngOnInit() {
  }
  login(){
    localStorage.setItem('user','test');
    console.log('login');

    this.routes.navigate(['/Home']);
  }
  logout(){
    localStorage.clear();
    console.log('logout');
    this.routes.navigate(['/Home']);


  }

}
