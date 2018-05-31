import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LogService } from './services/log.service';

@Component({
    selector: 'my-app',
    template:`
        <div>
            <template-driven></template-driven>
            <hr/>
            <simple></simple>
        </div>

    `
})
export class AppComponent implements OnInit {



    constructor(private http: Http) { }

    ngOnInit() { 
      
    }

}