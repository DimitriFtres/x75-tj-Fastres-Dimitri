import {Account} from "@Auth/model/business/Index";

export interface CredentialUpdatePayload
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
