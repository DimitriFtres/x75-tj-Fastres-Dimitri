// @ts-ignore
import {Dto} from "@Common/Dto";
import {Credential} from "@auth/model";

export interface AccountDto extends Dto
{
  account_id: number;
  firstname: String;
  lastname: String;
  credential: Credential;
}
