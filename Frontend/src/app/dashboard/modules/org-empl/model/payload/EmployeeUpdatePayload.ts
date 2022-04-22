import {Address, Organization} from "../business";
import {Account} from "@auth/model";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface EmployeeUpdatePayload extends Payload
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
  addresses: Address[];

}
