import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data : any;

  constructor() { }

  addData(data:any){
    this.data = data;
  }

  getData(){
    return this.data;
  }

}