import {PayloadInterface} from "@shared/model/payload/payload.interface";

export interface SignupPayload extends PayloadInterface {
  username: string;
  password: string;
}
