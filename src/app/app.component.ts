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
  constructor(private data:DataService){
 this.prices=this.data.getdata();



//console.log('prices',Object.keys(this.prices) );
let keys=Object.keys(this.prices);
let matrix=[];


let header=['sa','su','mo','tu','we','th','fr'];
let rows=['sa','su','mo','tu','we','th','fr'];
 
header.forEach(col => {
  let l=Array();
  rows.forEach( row=> {
    let item= col +" "+row;
   // console.log('this is item',item);
   //console.log('this is item value',this.prices[item]);
     l.push(this.prices[item]);
     console.log('l',l);

  });
  let final_row= {'col':col,data:l};
  this.all.push(final_row);
});

console.log(this.all);




//creatre 2 dimentions array from this data 

 
  }
}
