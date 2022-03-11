import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Wallet} from "@wallet/model";
import {ApiResponse} from "@shared/model/apiResponse/ApiResponse";

class Auth {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiResponse{
  List :BehaviorSubject<Auth[]> = new BehaviorSubject<Auth[]>([]) ;

  constructor(result: boolean, data: Object, code: String) {
    super(result, data, code);
  }}
