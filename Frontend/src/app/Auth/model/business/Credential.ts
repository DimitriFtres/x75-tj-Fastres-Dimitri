import {Account} from "@Auth/model/business/Index";

export interface Credential
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
