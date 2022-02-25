import {PayloadInterface} from "../common/PayloadInterface";

export interface Contact extends PayloadInterface {
  name: string;
  firstname: string;
  adress: string;
  email: string;
}
