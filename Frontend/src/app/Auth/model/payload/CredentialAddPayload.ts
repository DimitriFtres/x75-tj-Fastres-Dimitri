import {Account} from "@Auth/model/business/Index";
import {Payload} from "@Common/Payload";

export interface CredentialAddPayload extends Payload
{
  username: String;
  password: String;
  email: String;
  actif: boolean;
  account: Account;
}
