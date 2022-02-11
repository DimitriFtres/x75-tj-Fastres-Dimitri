import {Organization} from "@org-empl/model/business/Index";
import {Account} from "@Auth/model/business/Index";

export interface EmployeeUpdatePayload
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
