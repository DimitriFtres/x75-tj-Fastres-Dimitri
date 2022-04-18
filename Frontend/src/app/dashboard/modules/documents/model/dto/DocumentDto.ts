import {Employee, Organization} from "../../../org-empl/model/business";
import {Transaction} from "../../../wallet/model/business";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface DocumentDto extends Dto
{
  document_id: number;
  name: String;
  description: String;
  free_access: boolean;
  path: String;
  type: String;
  employees: Employee[];
  organizations: Organization[];
  transaction: Transaction;
}
