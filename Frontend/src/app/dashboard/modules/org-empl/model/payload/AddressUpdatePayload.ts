import {Employee, Organization} from "../business";
import {Payload} from "@Common/Payload";

export interface AddressUpdatePayload extends Payload
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
