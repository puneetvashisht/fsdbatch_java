import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryServiceService {

  constructor(private http: Http) { }

  fetchCategories(): Promise<any>{
    return  this.http.get('http://localhost:8080/categories').toPromise()
    .then((res)=>res.json());
  }
}
