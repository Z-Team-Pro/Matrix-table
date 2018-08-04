import { Injectable } from '@angular/core';
import {prices} from './data_model';
@Injectable()
export class DataService {

  constructor() { }


getdata(){

  return prices;
}



}
