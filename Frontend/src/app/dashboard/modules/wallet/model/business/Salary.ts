import {Employee} from "../../../org-empl/model/business";

export interface Salary
{
  salary_id: number;
  type: String;
  billing_date: Date;
  amount: number;
  periodicity: number;
  employee: Employee;
}
