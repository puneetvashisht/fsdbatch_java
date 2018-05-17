import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-badge',
    templateUrl: 'badge.component.html'
})
export class BadgeComponent implements OnInit {

    caption: string = "Default Caption"
    count: number = 1

    incrementCount(){
        console.log('Here i want to increment the count')
        this.count = this.count+1
    }

    constructor() { }

    ngOnInit() { 

    }

}