import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {Account, AccountAddPayload, AccountUpdatePayload} from "@auth/model";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService{

  accounts$: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Account[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'account/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Account[]
          }else{
            return [];
          }
        }),
        tap((response: Account[]) => {
          this.accounts$.next(response);
        })
      );
  }

  getDetail(account_id: string): Observable<Account> {
    return this.http.get(this.baseUrl+`account/detail/${account_id}`)
      .pipe(
        map((response) => {
          return response.data as Account
        })
      );
  }

  deleteAccount(account_id: string): Observable<Account> {
    return this.http.delete(this.baseUrl+`account/delete/${account_id}`)
      .pipe(
        map((response) => {
          return response.data as Account
        }),
        tap((response: Account) => {
          this.accounts$.getValue().forEach((e, index) => {
            if(e.account_id.toString() == account_id)
            {
              let value = this.accounts$.getValue();
              value.splice(index, 1);
              this.accounts$.next(value);
            }
          });
        })
      );
  }

  create(payload: AccountAddPayload): Observable<Account[]> {
    return this.http.post(this.baseUrl+'account/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Account[]) => {
          this.accounts$.next(response);
        })
      );

  }

  update(payload: AccountUpdatePayload): Observable<Account[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'account/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Account[]) => {
          this.accounts$.next(response);
        })
      );
  }

}
