import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../services/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
    selector: 'app-contact',
    template: `
        <h2>Display Contact Details here</h2>
        <p>Contact ID: {{contact?.id}}</p>
        <p>Contact Name: {{contact?.name}}</p>
        <p>Contact Mobile: {{contact?.mobile}}</p>
    ` 
})
export class ContactComponent implements OnInit {

    contact : Contact
    // id: number;
    constructor(public activatedRoute: ActivatedRoute, private contactService: ContactsService) { }

    ngOnInit() { 
        this.contact = this.activatedRoute.snapshot.data['contact']
        // console.log(this.activatedRoute.snapshot.params.id);
        // this.id = this.activatedRoute.snapshot.params.id
        // this.contactService.getContact(this.activatedRoute.snapshot.params.id)
        // .subscribe((data)=> {
        //     this.contact = data;
        // })
    }

}