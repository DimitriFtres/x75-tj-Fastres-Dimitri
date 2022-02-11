import {Employee, Organization} from "@org-empl/model/business/Index";
import {Dto} from "@Common/Dto";

export interface WalletDto extends Dto
{
  wallet_id: number;
  name: String;
  description: String;
  actif: boolean;
  type: String;
  employee: Employee;
  organization: Organization;
}
