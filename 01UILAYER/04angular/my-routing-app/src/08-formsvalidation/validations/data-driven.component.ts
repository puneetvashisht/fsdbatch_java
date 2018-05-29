import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent implements OnInit {

    myForm: FormGroup

    constructor() { }

    ngOnInit() { 

        this.myForm = new FormGroup({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('Test', Validators.required)
        })

    }

}