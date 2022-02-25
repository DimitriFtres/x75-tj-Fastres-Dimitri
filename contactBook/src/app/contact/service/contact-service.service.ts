import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {HttpService} from "./http.service";
import {ApiResponse} from "../common/ApiResponse";
import {contactOutputPayload} from "../model/ContactOutputPayload";


export class ContactServiceService extends ApiService {
  constructor(public http: HttpService) {
    super(http)
  }

  getList(): Observable<any> {
    return this.get('contacts');
  }

  getDetail(contact_id: string): Observable<any> {
    return this.get(`contact/${contact_id}`);
  }

  Create(payload:  contactOutputPayload) {
    return this.post('contact', payload);
  }

  update(payload: contactOutputPayload) {
    return this.put('contact', payload);
  }
}
