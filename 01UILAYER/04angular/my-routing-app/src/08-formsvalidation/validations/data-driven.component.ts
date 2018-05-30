import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent implements OnInit {

    myForm: FormGroup

    genders: Array<string> = ['Male', 'Female']

    constructor() { }

    ngOnInit() { 

        this.myForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl('', [Validators.required, this.exampleValidator]),
                'email': new FormControl('', Validators.email)
            }),
            'password': new FormControl('', Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{6,16}$")),
            'gender': new FormControl('Male')     
        })

    }

    onSubmit(){
       console.log(this.myForm);
       console.log(this.myForm.value);
    }


    exampleValidator(control: FormControl): {[s: string]: boolean}{
        if(control.value === 'Ravi'){
            return {"example": true}
        }
        return null;
    }

    }

}