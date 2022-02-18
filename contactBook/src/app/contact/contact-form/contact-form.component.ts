import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../model/Contact";
import {ContactService} from "../service/contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactServices!: Contact[];
  formGroup = new FormGroup({
    name: new FormControl('', []),
    firstname: new FormControl('', []),
    address: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.service$.subscribe((contacts: Contact[]) => {
      this.contactServices = contacts;
    });
  }

  submit():void {
  this.contactService.add((this.formGroup.value as Contact));
  }

}
