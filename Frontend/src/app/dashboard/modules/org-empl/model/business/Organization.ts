import {Address} from "@org-empl/model";

export interface Organization
{
  organization_id: number;
  name: String;
  description: String;
  actif: boolean;
  addresses: Address[];

}
