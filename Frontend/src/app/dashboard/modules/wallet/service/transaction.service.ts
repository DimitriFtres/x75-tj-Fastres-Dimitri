import {Injectable} from "@angular/core";
import {ApiService, HttpService} from "@shared/service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Transaction, TransactionAddPayload, TransactionUpdatePayload} from "@wallet/model";
import {map, switchMap, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TransactionService extends ApiService{

  transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Transaction[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'transaction/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Transaction[]
          }else{
            return [];
          }
        }),
        tap((response: Transaction[]) => {
          this.transactions$.next(response);
        })
      );
  }

  getDetail(transaction_id: string): Observable<Transaction> {
    return this.http.get(this.baseUrl+`transaction/detail/${transaction_id}`)
      .pipe(
        map((response) => {
          return response.data as Transaction
        })
      );
  }

  deleteTransaction(transaction_id: string): Observable<Transaction> {
    return this.http.delete(this.baseUrl+`transaction/delete/${transaction_id}`)
      .pipe(
        map((response) => {
          return response.data as Transaction
        }),
        tap((response: Transaction) => {
          this.transactions$.getValue().forEach((e, index) => {
            if(e.transaction_id.toString() == transaction_id)
            {
              let value = this.transactions$.getValue();
              value.splice(index, 1);
              this.transactions$.next(value);
            }
          });
        })
      );
  }

  create(payload: TransactionAddPayload): Observable<Transaction[]> {
    return this.http.post(this.baseUrl+'transaction/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Transaction[]) => {
          this.transactions$.next(response);
        })
      );

  }

  update(payload: TransactionUpdatePayload): Observable<Transaction[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'transaction/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Transaction[]) => {
          this.transactions$.next(response);
        })
      );
  }

}
