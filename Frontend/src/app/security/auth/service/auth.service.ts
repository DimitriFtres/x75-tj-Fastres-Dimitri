import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Wallet} from "@wallet/model";

class Auth {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  List :BehaviorSubject<Auth[]> = new BehaviorSubject<Auth[]>([]) ;

  constructor() { }
}
