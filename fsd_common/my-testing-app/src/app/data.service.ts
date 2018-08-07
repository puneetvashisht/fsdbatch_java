import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable()
export class DataService {

  constructor() { }

  fetchData(): Promise<any>{
    const returnPromise = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        resolve('Data');
      }, 4000)  
      
    })
    return returnPromise;
  }
}
