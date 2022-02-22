import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../interface/person";
import {PersonService} from "../service/person.service";
import {Gender} from "../enum/gender";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personServices!: Person[];
  formGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    gender: new FormControl(''),
    birth: new FormControl('')
  });
  genders: Gender[] = [Gender.Man, Gender.Woman, Gender.Other]

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.service$.subscribe((persons: Person[]) => {
      this.personServices = persons;
    });
  }

  submit(): void {
    console.log(this.formGroup.value);
    console.log(this.formGroup.value as Person);
    this.personService.add((this.formGroup.value as Person));

  }

}
