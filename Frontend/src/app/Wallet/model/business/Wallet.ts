import {Employee, Organization} from "@org-empl/model/business/Index";

export interface Wallet
{
  wallet_id: number;
  name: String;
  description: String;
  actif: boolean;
  type: String;
  employee: Employee;
  organization: Organization;
}
