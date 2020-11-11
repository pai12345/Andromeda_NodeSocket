class Helper {
  constructor() {}
  ResultObj(status: number, message: string, data: any) {
    const result = {
      status: status,
      message: message,
      data: data,
    };
    return result;
  }
}

const oServe_helper = new Helper();
export default oServe_helper;
