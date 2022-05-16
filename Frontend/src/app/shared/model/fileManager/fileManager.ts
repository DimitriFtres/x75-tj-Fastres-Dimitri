export interface FileManager{
  file_id : number;
  name: String;
  type: String;
  path: String;
  deleted: boolean;
  file: FileList;
}
