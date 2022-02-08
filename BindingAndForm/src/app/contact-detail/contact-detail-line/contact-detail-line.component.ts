import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isNil} from "lodash";

@Component({
  selector: 'app-contact-detail-line',
  templateUrl: './contact-detail-line.component.html',
  styleUrls: ['./contact-detail-line.component.scss']
})
export class ContactDetailLineComponent implements OnInit {

  id?: number;
  contact: String = "Je suis un fabuleux contact";
  constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!isNil(id)) {
      this.id=parseInt(id, 10);
    }
  }

}
