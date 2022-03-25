import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {ApiService} from "@shared/model/apiService/api.service";
import {HttpService} from "@shared/model/httpService/http.service";
import {map, switchMap} from "rxjs/operators";
import {Organization, OrganizationAddPayload, OrganizationUpdatePayload} from '@org-empl/model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService{

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Organization[]> {
    const headers = new Headers();
    return this.get('organization/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Organization[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(organization_id: string): Observable<Organization> {
    return this.get(`organization/${organization_id}`)
      .pipe(
        map((response) => {
          return response.data as Organization
        })
      );
  }

  deleteOrganization(organization_id: string): Observable<Organization> {
    return this.delete(`organization/delete/${organization_id}`)
      .pipe(
        map((response) => {
          return response.data as Organization
        })
      );
  }

  create(payload: OrganizationAddPayload): Observable<Organization[]> {
    return this.post('organization/create', payload)
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

  update(payload: OrganizationUpdatePayload): Observable<Organization[]> {
    return this.put('organization', payload)
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
