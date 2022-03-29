import { Injectable } from '@angular/core';
import {HttpService} from "@shared/model/httpService/http.service";
import {Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {ApiService} from "@shared/model/apiService/api.service";
import {Address, AddressAddPayload} from "@org-empl/model";
import {AddressUpdatePayload} from "@org-empl/model/payload/AddressUpdatePayload";

@Injectable({
  providedIn: 'root'
})
export class AddressService extends ApiService{


  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Address[]> {
    const headers = new Headers();
    return this.get('address/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Address[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(address_id: string): Observable<Address> {
    return this.get(`address/${address_id}`)
      .pipe(
        map((response) => {
          return response.data as Address
        })
      );
  }

  deleteAddress(address_id: string): Observable<Address> {
    return this.delete(`address/delete/${address_id}`)
      .pipe(
        map((response) => {
          return response.data as Address
        })
      );
  }

  create(payload: AddressAddPayload): Observable<Address[]> {
    return this.post('address/create', payload)
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

  update(payload: AddressUpdatePayload): Observable<Address[]> {
    return this.put('address', payload)
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
