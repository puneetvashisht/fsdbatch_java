import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  fetchEmployees(): Promise<any>{
    return this.http.get('http://localhost:8080/05springmvc/api/employees').toPromise()
    .then(res=>res.json())
  }
}
