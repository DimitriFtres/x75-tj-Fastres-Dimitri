import {Payload} from "../common/Payload";

export interface ContactUpdatePayload extends Payload
{
  id: number;
  name: string;
  firstname: string;
  adress: string;
  email: string;
}
