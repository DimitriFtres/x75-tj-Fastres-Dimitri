import {Component, Input, OnInit} from '@angular/core';
import {Contact, ContactAddPayload} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contacts!: Contact[];

  formContact: FormGroup = new FormGroup({
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required])
  });

  constructor(public contactService : ContactService) { }

  ngOnInit(): void {
    this.contactService.getList().subscribe(contacts => this.contacts = contacts);

  }
  submit(){
    this.contactService.create(this.formContact.value as ContactAddPayload).subscribe(contacts => this.contacts = contacts);
    this.contactService.getList().subscribe(contacts => this.contacts = contacts);

  }
}
