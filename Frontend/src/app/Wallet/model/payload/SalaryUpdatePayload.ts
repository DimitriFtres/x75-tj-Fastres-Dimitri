import {Employee} from "@org-empl/model/business/Index";

export interface SalaryUpdatePayload
{
  salary_id: number;
  type: String;
  billing_date: Date;
  amount: number;
  periodicity: number;
  employee: Employee;
}
