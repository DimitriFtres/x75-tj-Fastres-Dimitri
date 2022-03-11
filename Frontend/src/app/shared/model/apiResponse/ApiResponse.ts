export class ApiResponse{
  result!: boolean;
  data!: Object;
  code!: String;

  constructor(result: boolean, data: Object, code: String) {
    this.result = result;
    this.data = data;
    this.code = code;
  }
}
