import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {WalletAddPayload, WalletUpdatePayload, Wallet} from "@wallet/model";
import {ApiService, HttpService} from "@shared/service";
import {map, switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WalletService extends ApiService{

  wallets$: BehaviorSubject<Wallet[]> = new BehaviorSubject<Wallet[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Wallet[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'wallet/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Wallet[]
          }else{
            return [];
          }
        }),
        tap((response: Wallet[]) => {
          this.wallets$.next(response);
        })
      );
  }

  getDetail(wallet_id: string): Observable<Wallet> {
    return this.http.get(this.baseUrl+`wallet/detail/${wallet_id}`)
      .pipe(
        map((response) => {
          return response.data as Wallet
        })
      );
  }

  deleteWallet(wallet_id: string): Observable<Wallet> {
    return this.http.delete(this.baseUrl+`wallet/delete/${wallet_id}`)
      .pipe(
        map((response) => {
          return response.data as Wallet
        }),
        tap((response: Wallet) => {
          this.wallets$.getValue().forEach((e, index) => {
            if(e.wallet_id.toString() == wallet_id)
            {
              let value = this.wallets$.getValue();
              value.splice(index, 1);
              this.wallets$.next(value);
            }
          });
        })
      );
  }

  create(payload: WalletAddPayload): Observable<Wallet[]> {
    return this.http.post(this.baseUrl+'wallet/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Wallet[]) => {
          this.wallets$.next(response);
        })
      );

  }

  update(payload: WalletUpdatePayload): Observable<Wallet[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'wallet/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Wallet[]) => {
          this.wallets$.next(response);
        })
      );
  }

}
