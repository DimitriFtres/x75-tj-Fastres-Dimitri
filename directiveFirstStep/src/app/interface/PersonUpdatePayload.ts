import {Payload} from "../common/Payload";

export interface PersonUpdatePayload extends Payload
{
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}
