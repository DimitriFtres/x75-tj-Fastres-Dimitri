import { Injectable } from '@angular/core';
import {HttpService} from "@shared/model/httpService/http.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../apiResponse/ApiResponse";
import {PayloadInterface} from "@shared/model/payload/payload.interface";
import {map} from "rxjs/operators";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api/';
  constructor(public http: HttpService) {
  }
  get(partUrl: string):Observable<ApiResponse>{
    return this.http.get(`${this.baseUrl}${partUrl}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  getHeader(partUrl: string, option: JsonObject){
    return this.http.get(`${this.baseUrl}${partUrl}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  put(partUrl: String, payload:PayloadInterface):Observable<ApiResponse>{
    return this.http.put(`${this.baseUrl}${partUrl}`,payload)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  post(partUrl: String, payload:PayloadInterface):Observable<ApiResponse>{
    return this.http.post(`${this.baseUrl}${partUrl}`,payload)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
  delete(partUrl: String):Observable<ApiResponse>{
    return this.http.delete(`${this.baseUrl}${partUrl}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
}

