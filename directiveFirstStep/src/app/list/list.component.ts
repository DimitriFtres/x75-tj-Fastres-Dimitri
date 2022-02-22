import { Component, OnInit } from '@angular/core';
import {Person} from "../interface/person";
import {PersonService} from "../service/person.service";
import {faAdjust, faCoffee, faSpinner} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  male = faCoffee;
  female = faSpinner;
  other = faAdjust;


  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.service$.subscribe((persons: Person[]) => {
    });
  }

}
