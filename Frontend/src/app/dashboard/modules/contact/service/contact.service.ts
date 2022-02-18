import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact} from "@contact/model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  List :BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]) ;
  constructor() { }
}
