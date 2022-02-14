import {Account} from "../business";
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
