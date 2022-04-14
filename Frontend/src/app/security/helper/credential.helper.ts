import {Credential, CredentialDto} from "@auth/model";

export class CredentialHelper{
  public static credentialFromDto(dto: CredentialDto): Credential {
    return {
      credential_id: dto.credential_id,
      username: dto.username,
      password: dto.password,
      email: dto.email,
      actif: dto.actif,
      account: dto.account
    }
  }
}
