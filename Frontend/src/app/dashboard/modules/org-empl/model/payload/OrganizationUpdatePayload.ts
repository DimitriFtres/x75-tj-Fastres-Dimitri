// @ts-ignore
import {Payload} from "@Common/Payload";
import {Address} from "@org-empl/model";

export interface OrganizationUpdatePayload extends Payload
{
  organization_id: number;
  name: String;
  description: String;
  actif: boolean;
  addresses: Address[];
}
