import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {Organization, OrganizationAddPayload, OrganizationUpdatePayload} from '@org-empl/model';
import {ApiService, HttpService} from "@shared/service";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService{

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Organization[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'organization/list')
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
    return this.http.get(this.baseUrl+`organization/${organization_id}`)
      .pipe(
        map((response) => {
          return response.data as Organization
        })
      );
  }

  deleteOrganization(organization_id: string): Observable<Organization> {
    return this.http.delete(this.baseUrl+`organization/delete/${organization_id}`)
      .pipe(
        map((response) => {
          return response.data as Organization
        })
      );
  }

  create(payload: OrganizationAddPayload): Observable<Organization[]> {
    return this.http.post(this.baseUrl+'organization/create', payload)
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
    return this.http.put(this.baseUrl+'organization', payload)
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
