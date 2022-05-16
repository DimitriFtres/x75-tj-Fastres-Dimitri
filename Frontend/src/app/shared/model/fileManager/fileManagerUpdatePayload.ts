// @ts-ignore
import {Payload} from "@Common/Payload";


export interface FileManagerUpdatePayload extends Payload
{
  file_id : number;
  name: String;
  type: String;
  path: String;
  deleted: boolean;
  file: FileList;
}
