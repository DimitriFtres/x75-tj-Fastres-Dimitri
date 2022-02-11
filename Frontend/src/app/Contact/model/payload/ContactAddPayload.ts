import {Address} from "@org-empl/model/business/Index";

export interface ContactAddPayload
{
  firstname: String;
  lastname: String;
  email: String;
  phone: String;
  addresses: Address[]
}
