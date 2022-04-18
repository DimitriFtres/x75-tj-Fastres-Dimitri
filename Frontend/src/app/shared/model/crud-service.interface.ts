import {Observable} from 'rxjs';
import {ApiResponse} from './api-response.interface';
import {PayloadInterface} from "@shared/model/payload/payload.interface";

export interface CrudServiceInterface {
  list(): void;

  add(addPayload: PayloadInterface): Observable<ApiResponse>;

  update(updatePayload: PayloadInterface): Observable<ApiResponse>;

  delete(id: string | number): Observable<ApiResponse>;
}
