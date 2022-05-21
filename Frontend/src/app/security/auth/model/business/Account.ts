import {Credential} from "@auth/model";

export interface Account
{
  account_id: number;
  firstname: String;
  lastname: String;
  credential: Credential;
}
