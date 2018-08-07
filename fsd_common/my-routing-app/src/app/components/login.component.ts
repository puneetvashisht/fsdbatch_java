import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    template: `
        <h2>Login Component</h2>

        <div *ngIf="message!=''" class="alert alert-warning" role="alert">
            {{message}}
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">User Name</span>
        </div>
        <input #username (change)="0" type="text" class="form-control" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1"> 
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon2">Password</span>
        </div>
        <input #password (change)="0" type="password" class="form-control" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon2"> 
        </div>

        <button (click)="logIn(username.value, password.value)" type="button" class="btn btn-primary">Log In</button>

    `
})
export class LoginComponent implements OnInit {

    message: string  = ''
    constructor(private http: Http, private router: Router, private loginService: LoginService) { }

    ngOnInit() { 

    }
    logIn(username: string, password: string){

        console.log(username, password)
        this.loginService.authenticate()
        .then(data=>{
            
            console.log(data)
            if(data.auth){
                this.router.navigate(['profile'])
                 // -> Navigate to the profile page program
            }
            else{
                this.message = "Invalid UserName/Password!!"
            }
        })
        //AJAX
        // If authentication is success
            // -> Navigate to the profile page program
        // else
            // -> Display an error message

        
    }

}