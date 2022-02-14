import {Account} from "./index";

export interface Credential
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
