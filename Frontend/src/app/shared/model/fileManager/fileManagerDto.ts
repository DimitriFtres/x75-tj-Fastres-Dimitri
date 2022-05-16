// @ts-ignore
import {Dto} from "@Common/Dto";

export interface FileManagerDto extends Dto{
  file_id : number;
  name: String;
  type: String;
  path: String;
  deleted: boolean;
  file: FileList;
}
