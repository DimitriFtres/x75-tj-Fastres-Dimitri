import {Address} from "@org-empl/model/business/Index";
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
