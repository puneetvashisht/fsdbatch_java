import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-todo',
    template: `
        <div>   
            <input class="form-control" #todo (change)="0" type="text" placeholder="Enter a todo!!"/>
            <button class="btn btn-primary" (click) = "addTodo(todo.value)">Add Todo</button>

            <hr/>

            <ul class="list-group">
                <li class="list-group-item disabled" *ngFor="let todo of todos; let i = index"><span><p>{{todo.text}}</p><button class="btn btn-danger" (click)="removeTodo(i)">X</button></span></li>
                <li class="list-group-item" *ngFor="let todo of todos; let i = index"><span><p>{{todo.text}}</p><button class="btn btn-danger" (click)="removeTodo(i)">X</button></span></li>
            </ul>
        <div>
    `
})
export class TodoComponent implements OnInit {

    todos : Array<object> = [{text: 'todo item 1', isDone: true}, {text: 'todo item 2', isDone: false}];    
    constructor() { }

    addTodo(todo: string){
        this.todos.push({text: todo});
    }

    removeTodo(index: number){
        this.todos.splice(index, 1)
    }

    ngOnInit() { 

    }

}