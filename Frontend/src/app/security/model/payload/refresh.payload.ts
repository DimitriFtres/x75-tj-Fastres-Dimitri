import {PayloadInterface} from "@shared/model/payload/payload.interface";

export interface RefreshPayload extends PayloadInterface {
  refresh: string;
}
