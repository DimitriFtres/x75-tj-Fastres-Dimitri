import {Component, Input, OnInit} from '@angular/core';
import {Contact, ContactAddPayload} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "@org-empl/model";
import {AddressService} from "@org-empl/service/address.service";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  formContact: FormGroup = new FormGroup({
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required]),
    address : new FormControl('', [])
  });

  constructor(public contactService : ContactService,
              public addressService : AddressService) { }

  ngOnInit(): void {
    this.contactService.contacts$.subscribe();
    this.addressService.getList().subscribe();
  }
  submit(){
    console.log(JSON.stringify(this.formContact.value.address));
    console.log(this.formContact.value);

    if(this.formContact.value.address == 0)
    {
      this.formContact.value.address = {};
      this.createContact();
    }
    else
    {
      this.addressService.getDetail(this.formContact.value.address).subscribe(e => {
        this.formContact.value.address = e;
        console.log(this.formContact.value.address);
        this.createContact();
      });
    }


  }
  createContact()
  {
    this.contactService.create(this.formContact.value as ContactAddPayload).subscribe(ev => {
      console.log("add" + ev);
      console.log("add" + JSON.stringify(this.formContact.value));
    });
  }

}
