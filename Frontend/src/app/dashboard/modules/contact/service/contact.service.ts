import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Contact, ContactAddPayload, ContactUpdatePayload} from "@contact/model";
import {Account, AccountUpdatePayload} from "@auth/model";
import {map, switchMap} from "rxjs/operators";
import {HttpService} from "@shared/model/httpService/http.service";
import {ApiService} from "@shared/model/apiService/api.service";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService{

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Contact[]> {
    const headers = new Headers();
    return this.get('contact/list')
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

  deleteContact(contact_id: string): Observable<Contact> {
    return this.delete(`contact/delete/${contact_id}`)
      .pipe(
        map((response) => {
          return response.data as Contact
        })
      );
  }

  create(payload: ContactAddPayload): Observable<Contact[]> {
    return this.post('contact/create', payload)
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

  update(payload: ContactUpdatePayload): Observable<Contact[]> {
    return this.put('account', payload)
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

}
