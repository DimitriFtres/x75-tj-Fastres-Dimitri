import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {ApiService, HttpService} from "@shared/service";
import {Organization, OrganizationAddPayload, OrganizationUpdatePayload} from "@org-empl/model";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService{

  organizations$: BehaviorSubject<Organization[]> = new BehaviorSubject<Organization[]>([]);

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
        }),
        tap((response: Organization[]) => {
          this.organizations$.next(response);
        })
      );
  }

  getDetail(organization_id: string): Observable<Organization> {
    return this.http.get(this.baseUrl+`organization/detail/${organization_id}`)
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
        }),
        tap((response: Organization) => {
          this.organizations$.getValue().forEach((e, index) => {
            if(e.organization_id.toString() == organization_id)
            {
              let value = this.organizations$.getValue();
              value.splice(index, 1);
              this.organizations$.next(value);
            }
          });
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
        }),
        tap((response: Organization[]) => {
          this.organizations$.next(response);
        })
      );

  }

  update(payload: OrganizationUpdatePayload): Observable<Organization[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'organization/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Organization[]) => {
          this.organizations$.next(response);
        })
      );
  }

}
