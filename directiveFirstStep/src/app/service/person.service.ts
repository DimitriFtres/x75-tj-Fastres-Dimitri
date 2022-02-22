import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Person} from "../interface/person";
import {Gender} from "../enum/gender";


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  service$: BehaviorSubject<Person[]>  = new BehaviorSubject<Person[]>(this.fakeData());
    constructor() { }

  public fakeData() :Person[]
  {
    let man = {
      name: "ROGER",
      lastname: "FLANDERS",
      gender: Gender.Man,
      birth: new Date("1920-02-02")
    } as Person;
    let woman = {
      name: "ROGER",
      lastname: "FLANDERS",
      gender: Gender.Woman,
      birth: new Date("1980-02-02")
    } as Person;
    let other = {
    name: "ROGER",
    lastname: "FLANDERS",
    gender: Gender.Other,
    birth: new Date("2015-02-02")
  } as Person;

    return [man, woman, other];
  }

  add(person: Person): void {
    const value = this.service$.getValue();
    value.push(person);
    this.service$.next(value);
  }
}
