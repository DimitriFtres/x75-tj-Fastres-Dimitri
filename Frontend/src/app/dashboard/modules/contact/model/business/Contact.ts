import {Address} from "../../../org-empl/model/business";

export interface Contact
{
  contact_id: number;
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  address: Address
}
