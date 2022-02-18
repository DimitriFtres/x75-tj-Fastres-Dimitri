import { Component, OnInit } from '@angular/core';
import {ContactService} from "../service/contact.service";
import {Contact} from "../model/Contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contactServices!: Contact[];


  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.service$.subscribe((contacts: Contact[]) => {
      this.contactServices = contacts;
    });
  }

}
