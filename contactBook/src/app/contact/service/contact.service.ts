import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact} from "../model/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  service$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor() {
  }


  add(contact: Contact): void {
    const value = this.service$.getValue();
    value.push(contact);
    this.service$.next(value);
  }
}
