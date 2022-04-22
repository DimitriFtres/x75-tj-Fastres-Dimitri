// @ts-ignore
import {Payload} from "@Common/Payload";
import {Address} from "@org-empl/model";

export interface OrganizationAddPayload extends Payload
{
  name: String;
  description: String;
  actif: boolean;
  addresses: Address[];
}
