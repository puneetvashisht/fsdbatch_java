
import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolve implements Resolve<any> {
    
    constructor( private contactService: ContactsService) { }

    resolve(route: ActivatedRouteSnapshot){

        console.log(route.params['id']);

        return this.contactService.getContact(route.params['id'])
        // .subscribe((data)=> {
        //     console.log(data);
        // })

    }

}