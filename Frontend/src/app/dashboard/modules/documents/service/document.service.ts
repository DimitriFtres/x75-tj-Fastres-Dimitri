import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact} from "@contact/model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  List :BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]) ;

  constructor() { }
}
