
import {DtoInterface} from '@shared/model';
import {CredentialDto} from "@auth/model";
import {TokenDto} from "../dto";

export interface SigninResponse extends DtoInterface {
  user: CredentialDto;
  token: TokenDto;
}
