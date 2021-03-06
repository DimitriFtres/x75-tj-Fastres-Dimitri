import {Employee} from "../../../org-empl/model/business";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface SalaryDto extends Dto
{
  salary_id: number;
  type: String;
  billing_date: Date;
  amount: number;
  periodicity: number;
  employee: Employee;
}
