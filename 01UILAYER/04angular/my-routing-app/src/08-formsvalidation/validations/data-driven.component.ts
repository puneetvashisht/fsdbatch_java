import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
                'username': new FormControl('',[Validators.required, this.exampleValidator]),
                'email': new FormControl('', Validators.email)
            }),
            'password': new FormControl('', Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{6,16}$")),
            'gender': new FormControl('Male')     
        })

        this.myForm.statusChanges.subscribe((data:any) => console.log(data));

    }

    onSubmit(){
       console.log(this.myForm);
       console.log(this.myForm.value);
    }

    // asyncValidator(control: FormControl) : Promise<{[s: string]: boolean}> {
    //     // Server to make a request, AJAX -> can take time
    //     const promise = new Promise<{[s: string]: boolean}>( 
    //         (resolve, reject) => {
    //         setTimeout(()=>{
    //             console.log('Validation is fired now!!')
    //             if(control.value === 'Puneet'){
    //                 resolve({"invalid": true})
    //             }
    //             else{
    //                 resolve(null);
    //             }
    //         }
    //         , 2000)

    //     })
    //     return promise;
    // }

    exampleValidator(control: FormControl): {[s: string]: boolean}{
        if(control.value === 'Ravi'){
            return {"example": true}
        }
        return null;
    }

    }

