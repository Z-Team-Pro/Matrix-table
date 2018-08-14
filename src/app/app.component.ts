import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  prices:any;
  all=[];
  head=[];
  test=[];
  constructor(private data:DataService){
    localStorage.setItem('user','test');
   this.prices=this.data.getdata();
   let keys=Object.keys(this.prices);
   
    keys.forEach(element =>{
      var combine=element.split(' ');
      if(this.head.indexOf(combine[0])==-1){
         this.head.push(combine[0]);}
         if(this.test.indexOf(combine[1])==-1){
         this.test.push(combine[1]);}
        
    });
   
   let header= this.head;
   let rows= this.test;
rows.forEach(col => {
  let l=Array();
  header.forEach( row=> {
    let item= row +" "+col;

     l.push(this.prices[item]);
   
  });
  let final_row= {'col':col,data:l};
  this.all.push(final_row);
});


  }

  //set the id of td 

  getTdId(col,index){
    return col + " "+this.head[index];
  }
  //fetch td cell
  fetchId(event){
    console.log(event.target.id);
  }
}
