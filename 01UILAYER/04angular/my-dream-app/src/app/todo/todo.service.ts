import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class TodoService {

    
    
    todos : Array<object> = [{text: 'todo item', isDone: true}, {text: 'todo item 2', isDone: false}]; 
    constructor(private http : HttpClient){

    }

    getTodos() {
        // get this todos from AJAX or localStorage

        // AJAX
        return this.http.get('http://localhost:3000/todos', httpOptions)
        .toPromise()

        // Hard-Coded
        // return new Promise((resolve, reject) => {
        //     resolve(this.todos);
        // })

        // .then((res)=>{
        //     console.log(res);
        // });
        // return this.todos;
    }

    addTodo(obj){
        // Hard-coded
        // this.todos.push(obj);

        return this.http.post('http://localhost:3000/todos', obj , httpOptions)
        .toPromise()
    }

    removeTodo(index: number){
        this.todos.splice(index, 1)
    }


}