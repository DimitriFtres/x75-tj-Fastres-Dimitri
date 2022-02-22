import {Gender} from "../enum/gender";

export interface Person
{
  name: String;
  lastname: String;
  gender: Gender;
  birth: Date;
}
