import {Dto} from "../../common/Dto";

export interface ContactUpdatePayload extends Dto
{
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

