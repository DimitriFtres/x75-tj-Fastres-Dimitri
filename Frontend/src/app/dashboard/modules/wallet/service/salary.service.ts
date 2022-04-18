import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Salary, SalaryAddPayload, SalaryUpdatePayload} from "@wallet/model";
import {map, switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalaryService extends ApiService{

  salarys$: BehaviorSubject<Salary[]> = new BehaviorSubject<Salary[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Salary[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'salary/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Salary[]
          }else{
            return [];
          }
        }),
        tap((response: Salary[]) => {
          this.salarys$.next(response);
        })
      );
  }

  getDetail(salary_id: string): Observable<Salary> {
    return this.http.get(this.baseUrl+`salary/detail/${salary_id}`)
      .pipe(
        map((response) => {
          return response.data as Salary
        })
      );
  }

  deleteSalary(salary_id: string): Observable<Salary> {
    return this.http.delete(this.baseUrl+`salary/delete/${salary_id}`)
      .pipe(
        map((response) => {
          return response.data as Salary
        }),
        tap((response: Salary) => {
          this.salarys$.getValue().forEach((e, index) => {
            if(e.salary_id.toString() == salary_id)
            {
              let value = this.salarys$.getValue();
              value.splice(index, 1);
              this.salarys$.next(value);
            }
          });
        })
      );
  }

  create(payload: SalaryAddPayload): Observable<Salary[]> {
    return this.http.post(this.baseUrl+'salary/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Salary[]) => {
          this.salarys$.next(response);
        })
      );

  }

  update(payload: SalaryUpdatePayload): Observable<Salary[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'salary/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Salary[]) => {
          this.salarys$.next(response);
        })
      );
  }

}
