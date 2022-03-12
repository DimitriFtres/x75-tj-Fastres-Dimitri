import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Contact} from "../model/Contact";
import {ApiService} from "./api.service";
import {HttpService} from "./http.service";
import {contactOutputPayload} from "../model";
import {map, switchAll, switchMap} from "rxjs/operators";
import {ApiResponse} from "../common/ApiResponse";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService{
  service$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(public http: HttpService) {
    super(http)
  }

  getList(): Observable<Contact[]> {
    return this.get('contacts')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Contact[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(contact_id: string): Observable<Contact> {
    return this.get(`contact/${contact_id}`)
      .pipe(
      map((response) => {
          return response.data as Contact
      })
    );
  }

  Create(payload:  contactOutputPayload): Observable<Contact[]> {
    return this.post('contact', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        })
      );

  }

  update(payload: contactOutputPayload): Observable<Contact[]> {
    return this.put('contact', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        })
      );
  }

  add(contact: Contact): void {
    const value = this.service$.getValue();
    value.push(contact);
    this.service$.next(value);
  }
}
