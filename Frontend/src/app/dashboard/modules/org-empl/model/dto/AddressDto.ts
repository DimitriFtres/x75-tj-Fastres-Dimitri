import {Employee, Organization} from "../business";
import {Dto} from "@Common/Dto";

export interface AddressDto extends Dto
{
  address_id: number;
  type: String;
  road: String;
  number: String;
  box: String;
  cp: String;
  town: String;
  country: String;
  organization: Organization;
  employee: Employee;
}
