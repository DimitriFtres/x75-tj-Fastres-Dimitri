import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-detail-home-page',
  templateUrl: './contact-detail-home-page.component.html',
  styleUrls: ['./contact-detail-home-page.component.scss']
})
export class ContactDetailHomePageComponent implements OnInit {
  firstname: string = "Dimitri";
  lastname: string = "Fastrès";
  constructor() { }

  ngOnInit(): void {
  }

}
