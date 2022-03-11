import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ApiResponse} from "@shared/model/apiResponse/ApiResponse";

class OrgEmpl {
}

@Injectable({
  providedIn: 'root'
})
export class OrgEmplService extends ApiResponse{
  List :BehaviorSubject<OrgEmpl[]> = new BehaviorSubject<OrgEmpl[]>([]) ;

  constructor(result: boolean, data: Object, code: String) {
    super(result, data, code);
  }}
