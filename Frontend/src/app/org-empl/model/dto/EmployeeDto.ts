import {Organization} from "@org-empl/model/business/Index";
import {Account} from "@Auth/model/business/Index";
import {Dto} from "@Common/Dto";

export interface EmployeeDto extends Dto
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
