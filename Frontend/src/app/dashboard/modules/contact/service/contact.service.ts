import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact} from "@contact/model";
import {ApiResponse} from "@shared/model/apiResponse/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiResponse{
  List :BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]) ;
  constructor(result: boolean, data: Object, code: String) {
    super(result, data, code);
  }
}
