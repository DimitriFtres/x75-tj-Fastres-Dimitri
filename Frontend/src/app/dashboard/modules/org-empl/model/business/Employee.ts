import {Address, Organization} from "./index";
import {Account} from "../../../../../security/auth/model/business";

export interface Employee
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  address: Address;
  organization: Organization;
}
