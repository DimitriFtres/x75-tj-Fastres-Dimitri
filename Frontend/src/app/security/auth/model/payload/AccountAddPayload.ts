// @ts-ignore
import {Payload} from "@Common/Payload";
import {Credential} from "@auth/model";

export interface AccountAddPayload extends Payload
{
  firstname: String;
  lastname: String;
  credential: Credential;
}
