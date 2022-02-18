import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

class OrgEmpl {
}

@Injectable({
  providedIn: 'root'
})
export class OrgEmplService {
  List :BehaviorSubject<OrgEmpl[]> = new BehaviorSubject<OrgEmpl[]>([]) ;

  constructor() { }
}
