import {Dto} from "@Common/Dto";

export interface AccountDto extends Dto
{
  account_id: number;
  firstname: String;
  lastname: String;
}
