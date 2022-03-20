import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PayloadInterface} from "@shared/model/payload/payload.interface";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
  public get(url: string, option?: JsonObject): Observable<any> {
    if(option != null){
      return this.http.get(url, option)
    }else {
      return this.http.get(url)
    }
  }
  public post(url: string, data: PayloadInterface): Observable<any> {
    console.log(data);
    return this.http.post(url, data)
  }
  public put(url: string, data: PayloadInterface): Observable<any> {
    return this.http.put(url, data)
  }
  public delete(url: string): Observable<any> {
    return this.http.delete(url)
  }
}
