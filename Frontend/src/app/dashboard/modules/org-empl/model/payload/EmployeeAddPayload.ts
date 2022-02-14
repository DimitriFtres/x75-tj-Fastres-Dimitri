import {Organization} from "../business";
import {Account} from "../../../../../security/auth/model/business";
import {Payload} from "@Common/Payload";

export interface EmployeeAddPayload extends Payload
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
