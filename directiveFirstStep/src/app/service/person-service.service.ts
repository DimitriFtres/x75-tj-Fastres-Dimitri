import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {HttpService} from "./http.service";
import {PersonOutputPayload} from "../interface/PersonOutputPayload";


export class PersonServiceService extends ApiService {
  constructor(public http: HttpService) {
    super(http)
  }

  getList(): Observable<any> {
    return this.get('contacts');
  }

  getDetail(contact_id: string): Observable<any> {
    return this.get(`contact/${contact_id}`);
  }

  Create(payload:  PersonOutputPayload) {
    return this.post('contact', payload);
  }

  update(payload:PersonOutputPayload) {
    return this.put('contact', payload);
  }
}
