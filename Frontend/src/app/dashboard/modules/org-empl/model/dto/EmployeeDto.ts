import {Organization} from "../business";
import {Account} from "@auth/model";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface EmployeeDto extends Dto
{
  employee_id: number;
  role: String;
  actif: boolean;
  account: Account;
  organization: Organization;
}
