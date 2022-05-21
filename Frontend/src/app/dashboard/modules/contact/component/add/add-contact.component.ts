import {Component, Input, OnInit} from '@angular/core';
import {Contact, ContactAddPayload, ContactUpdatePayload} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, AddressAddPayload, Employee, Organization} from "@org-empl/model";
import {AddressService} from "@org-empl/service/address.service";
import {AddressUpdatePayload} from "@org-empl/model/payload/AddressUpdatePayload";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addresses: Address[] = [];

  formContact: FormGroup = new FormGroup({
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required]),
    addresses : new FormControl('', [])
  });

  constructor(public contactService : ContactService,
              public addressService : AddressService) { }

  ngOnInit(): void {
    this.contactService.contacts$.subscribe();
    this.addressService.getList().subscribe(e => console.log(e));
  }
  submit(){
  this.createContact();
  }
  createContact()
  {
    let contacts: Contact[];
    this.formContact.value.addresses = this.addresses;
    console.log(this.formContact.value as ContactAddPayload);
    this.contactService.create(this.formContact.value as ContactAddPayload).subscribe(contacts => {
      this.addresses.forEach(address => {
        let contact = contacts[Math.max.apply(Math, contacts.map(contact => contact.contact_id))];
        console.log(contact)

        if(contact)
        {
          let addressUpdate = {
            address_id : address.address_id,
            type : address.type,
            road : address.road,
            number : address.number,
            box : address.box,
            cp : address.cp,
            town : address.town,
            country : address.country,
            contact : contact,
            employee : address.employee,
            organization : address.organization
          } as AddressUpdatePayload;
          this.addressService.update(addressUpdate).subscribe();
        }
      });
    });
    this.addressService.getList().subscribe(e =>  this.formContact.reset());

  }

  modifyAddress($event: Address) {
    this.addresses = this.addresses.splice(this.addresses.indexOf($event), 1);
  }

  addAddress($event: Address) {
    this.addresses.push($event);
    console.log($event);
  }

}
