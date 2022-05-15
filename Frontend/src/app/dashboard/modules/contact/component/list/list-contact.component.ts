import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";
import {AddressService} from "@org-empl/service/address.service";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {


  constructor(public contactService: ContactService,
              public addressService: AddressService) { }

  ngOnInit(): void {
    this.contactService.getList().subscribe();
  }

  deleteClick(contact: number) {
    this.contactService.deleteContact(contact.toString()).subscribe();
  }

    modify(contact: Contact) {
      let row = document.getElementById(""+contact.contact_id);
      if(row != null)
      {
        for(let i = 0; i < row.children.length; i++)
        {
          let child = row.children.item(i);
          if(child != null)
          {
            child.remove();
          }
          else
          {
            row.childNodes.forEach(e => {
              e.remove();
            })
          }
        }
      }

    }
}
