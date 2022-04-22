import {Employee, Organization} from "../business";
// @ts-ignore
import {Payload} from "@Common/Payload";
import {Contact} from "@contact/model";

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
  contact: Contact;
  employee: Employee;
  organization: Organization;
}
