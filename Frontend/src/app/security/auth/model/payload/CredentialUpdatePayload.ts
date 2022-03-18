import {Account} from "../business";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface CredentialUpdatePayload extends Payload
{
  credential_id: number;
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
