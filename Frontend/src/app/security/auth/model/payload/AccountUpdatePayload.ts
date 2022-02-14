import {Payload} from "@Common/Payload";

export interface AccountUpdatePayload extends Payload
{
  account_id: number;
  firstname: String;
  lastname: String;
}
