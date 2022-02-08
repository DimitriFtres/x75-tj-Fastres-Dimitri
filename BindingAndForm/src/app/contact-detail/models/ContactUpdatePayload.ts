import {Payload} from "../../common/Payload";

export interface ContactUpdatePayload extends Payload
{
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}
