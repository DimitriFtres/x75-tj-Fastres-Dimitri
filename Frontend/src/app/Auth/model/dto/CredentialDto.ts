import {Account} from "@Auth/model/business/Index";

export interface CredentialDto
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
