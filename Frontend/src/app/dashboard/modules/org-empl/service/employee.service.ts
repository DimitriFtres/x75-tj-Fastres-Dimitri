import { Injectable } from '@angular/core';
import {HttpService} from "@shared/model/httpService/http.service";
import {Observable, of} from "rxjs";
import {Employee, EmployeeAddPayload, EmployeeUpdatePayload} from "@org-empl/model";
import {map, switchMap} from "rxjs/operators";
import {ApiService} from "@shared/model/apiService/api.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService {


  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Employee[]> {
    const headers = new Headers();
    return this.get('employee/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Employee[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(employee_id: string): Observable<Employee> {
    return this.get(`employee/${employee_id}`)
      .pipe(
        map((response) => {
          return response.data as Employee
        })
      );
  }

  deleteEmployee(employee_id: string): Observable<Employee> {
    return this.delete(`employee/delete/${employee_id}`)
      .pipe(
        map((response) => {
          return response.data as Employee
        })
      );
  }

  create(payload: EmployeeAddPayload): Observable<Employee[]> {
    return this.post('employee/create', payload)
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

  update(payload: EmployeeUpdatePayload): Observable<Employee[]> {
    return this.put('employee', payload)
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
