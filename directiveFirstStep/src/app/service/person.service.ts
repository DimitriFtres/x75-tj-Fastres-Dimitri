import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Person} from "../interface/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  service$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  constructor() {
  }


  add(contact: Person): void {
    const value = this.service$.getValue();
    value.push(contact);
    this.service$.next(value);
  }
}
