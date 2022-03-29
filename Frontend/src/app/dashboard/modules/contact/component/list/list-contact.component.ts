import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "@contact/model";
import {BehaviorSubject} from "rxjs";
import {ContactService} from "@contact/service/contact.service";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts: Contact[] = [];
  service$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getList().subscribe(contacts => this.contacts = contacts);
  }

  deleteClick(contact: Contact) {
    this.contactService.deleteContact(contact.contact_id.toString()).subscribe()
    this.contactService.getList();
  }
}
