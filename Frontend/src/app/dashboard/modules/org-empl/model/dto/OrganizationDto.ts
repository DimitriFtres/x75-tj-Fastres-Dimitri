// @ts-ignore
import {Dto} from "@Common/Dto";
import {Address} from "@org-empl/model";

export interface OrganizationDto extends Dto
{
  organization_id: number;
  name: String;
  description: String;
  actif: boolean;
  addresses: Address[];

}
