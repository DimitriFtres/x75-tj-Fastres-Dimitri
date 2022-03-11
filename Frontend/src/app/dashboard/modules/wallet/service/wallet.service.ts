import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Wallet} from "@wallet/model";
import {ApiResponse} from "@shared/model/apiResponse/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class WalletService extends ApiResponse {
  List :BehaviorSubject<Wallet[]> = new BehaviorSubject<Wallet[]>([]) ;

  constructor(result: boolean, data: Object, code: String) {
    super(result, data, code);
  }}
