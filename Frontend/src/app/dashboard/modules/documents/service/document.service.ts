import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {DocumentAddPayload, DocumentUpdatePayload} from "@documents/model";
import {Document} from "@documents/model";
import {ApiService, HttpService} from "@shared/service";
import {Contact} from "@contact/model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService {
  documents$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);

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
        }),
        tap((response: Document[]) => {
          this.documents$.next(response);
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
        }),
        tap((response: Document) => {
          this.documents$.getValue().forEach((e, index) => {
            if(e.document_id.toString() == document_id)
            {
              let value = this.documents$.getValue();
              value.splice(index, 1);
              this.documents$.next(value);
            }
          })
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
        }),
        tap((response: Document[]) => {
          this.documents$.next(response);
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
        }),
        tap((response: Document[]) => {
          this.documents$.next(response);
        })
      );
  }
}
