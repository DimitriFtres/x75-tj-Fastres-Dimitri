import {Employee, Organization} from "./index";
import {Contact} from "@contact/model";
export interface Address
{
  address_id: number;
  type: String;
  road: String;
  number: String;
  box: String;
  cp: String;
  town: String;
  country: String;
}
