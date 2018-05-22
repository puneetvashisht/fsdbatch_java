import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class TodoService {

    
    
    todos : Array<object> = [{text: 'todo item 1', isDone: true}, {text: 'todo item 2', isDone: false}]; 
    constructor(private http : HttpClient){

    }

    getTodos() {
        // get this todos from AJAX or localStorage
        this.http.get('http://localhost:8080/test.json', httpOptions).toPromise().then(res=>console.log(res));
        return this.todos;
    }

    addTodo(obj){
        this.todos.push(obj);
    }

    removeTodo(index: number){
        this.todos.splice(index, 1)
    }


}