import {Employee, Organization} from "../../../org-empl/model/business";
import {Transaction} from "../../../wallet/model/business";
// @ts-ignore
import {Payload} from "@Common/Payload";
import {FileManager} from "@shared/model/fileManager/fileManager";

export interface DocumentUpdatePayload extends Payload
{
  document_id: number;
  name: String;
  description: String;
  free_access: boolean;
  path: FileManager;
  type: String;
  employee: Employee;
  organization: Organization;
  transaction: Transaction;
}
