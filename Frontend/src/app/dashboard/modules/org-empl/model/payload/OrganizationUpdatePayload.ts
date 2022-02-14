import {Payload} from "@Common/Payload";

export interface OrganizationUpdatePayload extends Payload
{
  organization_id: number;
  name: String;
  description: String;
  actif: boolean;
}
