import {Organization} from "./Index";
import {Account} from "../../../../../security/auth/model/business";

export interface Employee
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
