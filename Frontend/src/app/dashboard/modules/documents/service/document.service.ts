import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {DocumentAddPayload, DocumentUpdatePayload} from "@documents/model";
import {Document} from "@documents/model";
import {ApiService, HttpService} from "@shared/service";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Document[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'document/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Document[]
          }else{
            return [];
          }
        })
      );
  }

  getDetail(document_id: string): Observable<Document> {
    return this.http.get(this.baseUrl+`document/${document_id}`)
      .pipe(
        map((response) => {
          return response.data as Document
        })
      );
  }

  deleteDocument(document_id: string): Observable<Document> {
    return this.http.delete(this.baseUrl+`document/delete/${document_id}`)
      .pipe(
        map((response) => {
          return response.data as Document
        })
      );
  }

  create(payload: DocumentAddPayload): Observable<Document[]> {
    return this.http.post(this.baseUrl+'document/create', payload)
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

  update(payload: DocumentUpdatePayload): Observable<Document[]> {
    return this.http.put(this.baseUrl+'document', payload)
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
