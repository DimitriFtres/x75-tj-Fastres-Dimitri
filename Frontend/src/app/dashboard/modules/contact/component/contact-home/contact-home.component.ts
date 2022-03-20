import { Component, OnInit } from '@angular/core';
import {Contact} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(public contactService : ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(){
    this.contactService.getList().subscribe(contacts => {
      this.contacts = contacts;
      console.log(contacts);
    })
  }
}
