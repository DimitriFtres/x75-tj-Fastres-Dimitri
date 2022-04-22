import {Employee, Organization} from "../business";
// @ts-ignore
import {Dto} from "@Common/Dto";
import {Contact} from "@contact/model";

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
  contact: Contact;
  employee: Employee;
  organization: Organization;
}
