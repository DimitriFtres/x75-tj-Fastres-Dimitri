import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact} from "@contact/model";
import {ApiResponse} from "@shared/model/apiResponse/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiResponse {
  List :BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]) ;

  constructor(result: boolean, data: Object, code: String) {
    super(result, data, code);
  }}
