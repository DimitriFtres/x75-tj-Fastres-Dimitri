import {Account} from "@Auth/model/business/Index";

export interface CredentialAddPayload
{
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
