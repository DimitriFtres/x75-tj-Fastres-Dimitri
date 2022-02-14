import {Employee, Organization} from "../../../org-empl/model/business";
import {Payload} from "@Common/Payload";

export interface WalletUpdatePayload extends Payload
{
  wallet_id: number;
  name: String;
  description: String;
  actif: boolean;
  type: String;
  employee: Employee;
  organization: Organization;
}
