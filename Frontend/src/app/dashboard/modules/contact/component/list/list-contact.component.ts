import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "@contact/model";
import {ContactService} from "@contact/service/contact.service";
import {createContentChild} from "@angular/compiler/src/core";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {


  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getList().subscribe();
  }

  deleteClick(contact: number) {
    this.contactService.deleteContact(contact.toString()).subscribe(contactdeleted => {
      console.log(contact);
    })
  }

    modify(contact: Contact) {
      console.log(document.getElementById(""+contact.contact_id));
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
