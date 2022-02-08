import {Dto} from "../../common/Dto";

export interface ContactDto extends Dto
{
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

