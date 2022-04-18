import {Employee, Organization} from "../../../org-empl/model/business";
import {Transaction} from "../../../wallet/model/business";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface DocumentAddPayload extends Payload
{
  name: String;
  description: String;
  free_access: boolean;
  path: String;
  type: String;
  employees: Employee[];
  organizations: Organization[];
  transaction: Transaction;
}
