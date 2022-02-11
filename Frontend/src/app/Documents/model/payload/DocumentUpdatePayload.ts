import {Employee, Organization} from "@org-empl/model/business/Index";
import {Transaction} from "@Wallet/model/business/Index";
import {Payload} from "@Common/Payload";

export interface DocumentUpdatePayload extends Payload
{
  document_id: number;
  name: String;
  description: String;
  free_access: boolean;
  path: String;
  type: String;
  employee: Employee;
  organization: Organization;
  transaction: Transaction;
}
