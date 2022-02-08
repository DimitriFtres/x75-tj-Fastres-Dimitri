import {Payload} from "../../common/Payload";

export interface ContactAddPayload extends Payload
{
  contact_id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}
