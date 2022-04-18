import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {ApiService, HttpService} from "@shared/service";
import {Employee, EmployeeAddPayload, EmployeeUpdatePayload} from "@org-empl/model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{

  employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Employee[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'employee/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Employee[]
          }else{
            return [];
          }
        }),
        tap((response: Employee[]) => {
          this.employees$.next(response);
        })
      );
  }

  getDetail(employee_id: string): Observable<Employee> {
    return this.http.get(this.baseUrl+`employee/detail/${employee_id}`)
      .pipe(
        map((response) => {
          return response.data as Employee
        })
      );
  }

  deleteEmployee(employee_id: string): Observable<Employee> {
    return this.http.delete(this.baseUrl+`employee/delete/${employee_id}`)
      .pipe(
        map((response) => {
          return response.data as Employee
        }),
        tap((response: Employee) => {
          this.employees$.getValue().forEach((e, index) => {
            if(e.employee_id.toString() == employee_id)
            {
              let value = this.employees$.getValue();
              value.splice(index, 1);
              this.employees$.next(value);
            }
          });
        })
      );
  }

  create(payload: EmployeeAddPayload): Observable<Employee[]> {
    return this.http.post(this.baseUrl+'employee/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Employee[]) => {
          this.employees$.next(response);
        })
      );

  }

  update(payload: EmployeeUpdatePayload): Observable<Employee[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'employee/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Employee[]) => {
          this.employees$.next(response);
        })
      );
  }

}
