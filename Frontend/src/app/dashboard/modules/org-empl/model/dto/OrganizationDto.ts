import {Dto} from "@Common/Dto";

export interface OrganizationDto extends Dto
{
  organization_id: number;
  name: String;
  description: String;
  actif: boolean;
}
