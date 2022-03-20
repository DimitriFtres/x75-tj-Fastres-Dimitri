import {Address} from "../../../org-empl/model/business";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface ContactDto extends Dto
{
  contact_id: number;
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  addresses: Address[]
}
