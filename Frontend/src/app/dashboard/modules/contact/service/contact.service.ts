import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Contact, ContactAddPayload, ContactUpdatePayload} from "@contact/model";
import {Account, AccountUpdatePayload} from "@auth/model";
import {map, switchMap, tap} from "rxjs/operators";
import {ApiService, HttpService} from "@shared/service";


@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService{

  contacts$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Contact[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'contact/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Contact[]
          }else{
            return [];
          }
        }),
        tap((response: Contact[]) => {
          this.contacts$.next(response);
        })
      );
  }

  getDetail(contact_id: string): Observable<Contact> {
    return this.http.get(this.baseUrl+`contact/detail/${contact_id}`)
      .pipe(
        map((response) => {
          return response.data as Contact
        })
      );
  }

  deleteContact(contact_id: string): Observable<Contact> {
    return this.http.delete(this.baseUrl+`contact/delete/${contact_id}`)
      .pipe(
        map((response) => {
          return response.data as Contact
        }),
        tap((response: Contact) => {
          this.contacts$.getValue().forEach((e, index) => {
            if(e.contact_id.toString() == contact_id)
            {
              let value = this.contacts$.getValue();
              value.splice(index, 1);
              this.contacts$.next(value);
            }
          });
        })
      );
  }

  create(payload: ContactAddPayload): Observable<Contact[]> {
    return this.http.post(this.baseUrl+'contact/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Contact[]) => {
          this.contacts$.next(response);
        })
      );

  }

  update(payload: ContactUpdatePayload): Observable<Contact[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'contact/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Contact[]) => {
          this.contacts$.next(response);
        })
      );
  }

}
