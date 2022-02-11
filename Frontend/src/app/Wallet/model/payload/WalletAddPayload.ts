import {Employee, Organization} from "@org-empl/model/business/Index";
import {Payload} from "@Common/Payload";

export interface WalletAddPayload extends Payload
{
  wallet_id: number;
  name: String;
  description: String;
  actif: boolean;
  type: String;
  employee: Employee;
  organization: Organization;
}
