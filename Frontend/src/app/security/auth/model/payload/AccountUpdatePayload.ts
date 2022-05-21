// @ts-ignore
import {Payload} from "@Common/Payload";
import {Credential} from "@auth/model";

export interface AccountUpdatePayload extends Payload
{
  account_id: number;
  firstname: String;
  lastname: String;
  credential: Credential;
}
