import {Account} from "../business";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface CredentialDto extends Dto
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
