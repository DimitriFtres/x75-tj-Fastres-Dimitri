import {Organization} from "@org-empl/model/business/Index";
import {Account} from "@Auth/model/business/Index";
import {Payload} from "@Common/Payload";

export interface EmployeeUpdatePayload extends Payload
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
