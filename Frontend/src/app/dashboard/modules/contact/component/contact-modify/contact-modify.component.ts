import { Component, OnInit } from '@angular/core';
import {Contact, ContactUpdatePayload} from "@contact/model";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "@contact/service/contact.service";
import {AddressService} from "@org-empl/service/address.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, Employee, Organization} from "@org-empl/model";
import {AddressUpdatePayload} from "@org-empl/model/payload/AddressUpdatePayload";

@Component({
  selector: 'app-contact-modify',
  templateUrl: './contact-modify.component.html',
  styleUrls: ['./contact-modify.component.scss']
})
export class ContactModifyComponent implements OnInit {
  contact: Contact = {} as Contact;

  formContact: FormGroup = new FormGroup({
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required]),
  });

  constructor(public route: ActivatedRoute,
              public contactService: ContactService,
              public addressService: AddressService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.contactService.getDetail(id).subscribe(e => this.contact = e);
      this.addressService.getList().subscribe();
    }
  }

  submit() {
      let updateContact = {
        contact_id: this.contact.contact_id,
        firstname: this.formContact.value.firstname,
        lastname: this.formContact.value.lastname,
        email: this.formContact.value.email,
        phone: this.formContact.value.phone,
        addresses: this.contact.addresses
      } as ContactUpdatePayload

      this.contactService.update(updateContact).subscribe();
  }

  modifyAddress($event: Address) {
    $event.employee = {} as Employee;
    $event.organization = {} as Organization;
    $event.contact = {} as Contact;
    this.addressService.update($event as AddressUpdatePayload).subscribe();
  }

  addAddress($event: Address) {
     this.contact.addresses.push($event);
    let updateContact = {
      contact_id: this.contact.contact_id,
      firstname: this.formContact.value.firstname,
      lastname: this.formContact.value.lastname,
      email: this.formContact.value.email,
      phone: this.formContact.value.phone,
      addresses: this.contact.addresses
    } as ContactUpdatePayload
    this.contactService.update(updateContact).subscribe();
  }
}
