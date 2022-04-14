import {Address} from "../../../org-empl/model/business";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface ContactUpdatePayload extends Payload
{
  contact_id: number;
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  address: Address;
}


