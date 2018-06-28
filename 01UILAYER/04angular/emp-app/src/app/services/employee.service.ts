import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Employee } from '../model/Employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  fetchEmployees(): Promise<any>{
    return this.http.get('http://localhost:8080/05springmvc/api/employees').toPromise()
    .then(res=>res.json())
  }

  addEmployee(employee:Employee): Promise<any>{
    return this.http.post('http://localhost:8080/05springmvc/api/employee', employee).toPromise()
  }
}
