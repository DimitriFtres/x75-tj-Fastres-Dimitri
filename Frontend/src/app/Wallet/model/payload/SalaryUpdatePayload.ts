import {Employee} from "@org-empl/model/business/Index";
import {Payload} from "@Common/Payload";

export interface SalaryUpdatePayload extends Payload
{
  salary_id: number;
  type: String;
  billing_date: Date;
  amount: number;
  periodicity: number;
  employee: Employee;
}
