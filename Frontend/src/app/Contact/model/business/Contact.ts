import {Address} from "@org-empl/model/business/Index";

export interface Contact
{
  contact_id: number;
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  addresses: Address[]
}
