import {PayloadInterface} from "@shared/model/payload/payload.interface";

export interface SigninPayload extends PayloadInterface {
  username: string;
  password: string;
}
