import {Dto} from "../common/Dto";

export interface ContactDto extends Dto
{
  id: number;
  name: string;
  firstname: string;
  adress: string;
  email: string;
}

