// @ts-ignore
import {Payload} from "@Common/Payload";

export interface OrganizationAddPayload extends Payload
{
  name: String;
  description: String;
  actif: boolean;
}
