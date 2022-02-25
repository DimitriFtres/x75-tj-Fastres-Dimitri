import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PayloadInterface} from "../model/PayloadInterface";

class ApiResponse {
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api/';

  constructor(public http: HttpService) {
  }

  get(partUrl: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${partUrl}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  put(partUrl: String, payload: PayloadInterface): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}${partUrl}`, payload)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  post(partUrl: String, payload: PayloadInterface): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${partUrl}`, payload)
      .pipe(
        map(response => response as ApiResponse)
      );
  }

  delete(partUrl: String): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}${partUrl}`)
      .pipe(
        map(response => response as ApiResponse)
      );
  }
}
