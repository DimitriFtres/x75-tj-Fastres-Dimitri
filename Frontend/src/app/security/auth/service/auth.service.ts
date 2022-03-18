import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchAll, switchMap} from "rxjs/operators";
import * as http from "http";
import {ApiService} from "@shared/model/apiService/api.service";
import {HttpService} from "@shared/model/httpService/http.service";
import {Account, AccountUpdatePayload} from "@auth/model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{
  service$: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);

  constructor(public http: HttpService) {
    super(http)
  }

  getList(): Observable<Account[]> {
    return this.get('contacts')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Account[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(contact_id: string): Observable<Account> {
    return this.get(`contact/${contact_id}`)
      .pipe(
        map((response) => {
          return response.data as Account
        })
      );
  }

  Create(payload:  AccountUpdatePayload): Observable<Account[]> {
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

  update(payload: AccountUpdatePayload): Observable<Account[]> {
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

  add(contact: Account): void {
    const value = this.service$.getValue();
    value.push(contact);
    this.service$.next(value);
  }
}
