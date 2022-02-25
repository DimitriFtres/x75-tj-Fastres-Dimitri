import {Dto} from "../common/Dto";

export interface PersonDto extends Dto
{
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

