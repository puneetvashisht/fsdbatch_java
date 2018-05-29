import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    template:`
        <div>
            <data-driven></data-driven>
        </div>

    `
})
export class AppComponent implements OnInit {



    constructor(private http: Http) { }

    ngOnInit() { 
      
    }

}