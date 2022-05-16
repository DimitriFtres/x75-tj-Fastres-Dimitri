import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {ApiService, HttpService} from "@shared/service";
import {Contact} from "@contact/model";
import {FileManager} from "@shared/model/fileManager/fileManager";
import {FileManagerAddPayload} from "@shared/model/fileManager/fileManagerAddPayload";
import {FileManagerUpdatePayload} from "@shared/model/fileManager/fileManagerUpdatePayload";
import {HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileManagerService extends ApiService {
  fileManagers$: BehaviorSubject<FileManager[]> = new BehaviorSubject<FileManager[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<FileManager[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'fileManager/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as FileManager[]
          }else{
            return [];
          }
        }),
        tap((response: FileManager[]) => {
          this.fileManagers$.next(response);
        })
      );
  }

  getDetail(file_id: string): Observable<FileManager> {
    return this.http.get(this.baseUrl+`fileManager/detail/${file_id}`)
      .pipe(
        map((response) => {
          return response.data as FileManager
        })
      );
  }

  deleteFileManager(file_id: string): Observable<FileManager> {
    return this.http.delete(this.baseUrl+`fileManager/delete/${file_id}`)
      .pipe(
        map((response) => {
          return response.data as FileManager
        }),
        tap((response: FileManager) => {
          this.fileManagers$.getValue().forEach((e, index) => {
            if(e.file_id.toString() == file_id)
            {
              let value = this.fileManagers$.getValue();
              value.splice(index, 1);
              this.fileManagers$.next(value);
            }
          })
        })
      );
  }

  create(payload: FileManagerAddPayload): Observable<FileManager[]> {
    return this.http.post(this.baseUrl+'fileManager/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: FileManager[]) => {
          this.fileManagers$.next(response);
        })
      );

  }

  update(payload: FileManagerUpdatePayload): Observable<FileManager[]> {
    return this.http.put(this.baseUrl+'fileManager', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: FileManager[]) => {
          this.fileManagers$.next(response);
        })
      );
  }
}
