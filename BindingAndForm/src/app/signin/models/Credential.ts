import {Payload} from "../../common/Payload";

export interface Credential extends Payload
{
  username: string;
  password: string;

}
