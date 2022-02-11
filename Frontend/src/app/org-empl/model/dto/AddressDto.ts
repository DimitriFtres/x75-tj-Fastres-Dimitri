import {Employee, Organization} from "@org-empl/model/business/Index";

export interface AddressDto
{
  address_id: number;
  type: String;
  road: String;
  number: String;
  box: String;
  cp: String;
  town: String;
  country: String;
  organization: Organization;
  employee: Employee;
}
