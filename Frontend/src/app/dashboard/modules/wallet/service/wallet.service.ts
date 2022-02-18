import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Wallet} from "@wallet/model";

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  List :BehaviorSubject<Wallet[]> = new BehaviorSubject<Wallet[]>([]) ;

  constructor() { }
}
