import {Gender} from "../enum/gender";
import {Payload} from "../common/Payload";

export interface PersonAddPayload extends Payload
{
  contact_id: number;
  name: String;
  lastname: String;
  gender: Gender;
  birth: Date;
}
