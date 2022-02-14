import {Address} from "../../../org-empl/model/business";
import {Payload} from "@Common/Payload";

export interface ContactAddPayload extends Payload
{
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  addresses: Address[]
}