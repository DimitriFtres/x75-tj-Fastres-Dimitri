// @ts-ignore
import {Payload} from "@Common/Payload";


export interface FileManagerAddPayload extends Payload
{
  name: String;
  type: String;
  path: String;
  deleted: boolean;
  file: FileList;
}
