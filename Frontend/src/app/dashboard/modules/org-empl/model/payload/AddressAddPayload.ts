import {Employee, Organization} from "../business";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface AddressAddPayload extends Payload
{
  type: String;
  road: String;
  number: String;
  box: String;
  cp: String;
  town: String;
  country: String;
}
