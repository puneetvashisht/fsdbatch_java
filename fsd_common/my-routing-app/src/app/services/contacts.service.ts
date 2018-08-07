import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable()
export class ContactsService {

    contacts: Array<Contact> = [
        {id: 23, name: "Ravi", mobile: 9999988888},
        {id: 13, name: "Priya", mobile: 9999988888},
        {id: 1, name: "Chintvan", mobile: 9999988888},
        {id: 22, name: "Sanjeev", mobile: 9999988888}
    ]
    
    constructor() { }

    getContacts(){
        // http.get()
       return Observable.create((observer)=>{
            observer.next(this.contacts)
        })
    }

    getContact(id: number){
        return Observable.create(observer => {
            setTimeout(() => {
              observer.next(this.contacts.find((contact) => contact.id == id))
              observer.complete();
            }, 5000);
        });
    }

}