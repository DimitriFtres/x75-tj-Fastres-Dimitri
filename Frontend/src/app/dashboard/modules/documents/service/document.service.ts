import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpService} from "@shared/model/httpService/http.service";
import {map, switchMap} from "rxjs/operators";
import {ApiService} from "@shared/model/apiService/api.service";
import {DocumentAddPayload, DocumentUpdatePayload} from "@documents/model";
import {Document} from "@documents/model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Document[]> {
    const headers = new Headers();
    return this.get('document/list')
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
    return this.get(`document/${document_id}`)
      .pipe(
        map((response) => {
          return response.data as Document
        })
      );
  }

  deleteDocument(document_id: string): Observable<Document> {
    return this.delete(`document/delete/${document_id}`)
      .pipe(
        map((response) => {
          return response.data as Document
        })
      );
  }

  create(payload: DocumentAddPayload): Observable<Document[]> {
    return this.post('document/create', payload)
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
    return this.put('document', payload)
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
