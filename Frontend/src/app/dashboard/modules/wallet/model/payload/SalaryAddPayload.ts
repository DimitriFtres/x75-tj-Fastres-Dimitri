import {Employee} from "../../../org-empl/model/business";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface SalaryAddPayload extends Payload
{
  salary_id: number;
  type: String;
  billing_date: Date;
  amount: number;
  periodicity: number;
  employee: Employee;
}
