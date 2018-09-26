import { Component, OnInit } from '@angular/core';
import {data} from '../data_loader';
import { HostListener} from "@angular/core";
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
max:number=10;
  loading_data=[];
  constructor() {

    this.loading_data=data;
   }

   ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
}

ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (): void => {
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   console.log('scroll on bottom');
   console.log('max=',this.max);
    this.max=this.max+5;
}

};


}
