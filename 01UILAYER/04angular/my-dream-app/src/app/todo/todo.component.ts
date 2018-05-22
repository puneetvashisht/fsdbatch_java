import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service'

@Component({
    selector: 'my-todo',
    template: `
        <div>   
            <input class="form-control" #todo (change)="0" type="text" placeholder="Enter a todo!!"/>
            <button class="btn btn-primary" (click) = "addTodo(todo.value)">Add Todo</button>

            <hr/>

            <ul class="list-group">
                <li [ngClass]="getClassForItem(todo.isDone)" *ngFor="let todo of todos;let i = index">
                        <span>
                            <p [ngStyle]= "{'color': getColor(todo.isDone)}">{{todo.text}}</p>
                            <button class="btn btn-danger" (click)="removeTodo(i)">X</button>
                        </span>
                    </li>
            </ul>
        <div>
    `,
    providers: [TodoService]
})
export class TodoComponent implements OnInit {

    private todos: Array<object>;
       
    constructor(public todoService: TodoService) { }

    ngOnInit() { 
        this.todos = this.todoService.getTodos();
    }

    getClassForItem(isDone: boolean){
        if(isDone){
            return "list-group-item disabled"
        }
        else{
            return "list-group-item"
        }
    }
    getColor(isDone: boolean){
        if(isDone){
            return "green"
        }
        else{
            return "black"
        }
    }
    
    addTodo(todo: string){
        this.todoService.addTodo({text: todo});
    }

    removeTodo(index: number){
        this.todoService.removeTodo(index);
    }

   

}