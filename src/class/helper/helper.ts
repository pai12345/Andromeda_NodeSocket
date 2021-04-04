import crypto from "crypto";
import generateEnv from "../../config/config";
// import isEmpty from "validator/lib/isEmpty";
// import { http_status, generic_status } from "../../utility/interface";

class Helper {
  ResultObj(status: number, message: string, data: any) {
    const result = {
      status: status,
      message: message,
      data: data,
    };
    return result;
  }
  // Validate_data(data: any) {
  //   let message: string;
  //   let status: number;
  //   const data_nullcoalesce = data ?? generic_status.DataNotAvailable;

  //   if (data_nullcoalesce === generic_status.DataNotAvailable) {
  //     status = http_status.BADREQUEST;
  //     message = generic_status.DataNotAvailable;
  //   } else if (isEmpty(data_nullcoalesce)) {
  //     status = http_status.BADREQUEST;
  //     message = generic_status.Empty;
  //   } else {
  //     status = http_status.Success;
  //     message = http_status.SuccessMessage;
  //   }
  //   return this.ResultObj(status, message, data);
  // }
  Encrypt_data(data: string) {
    const ENCRYPTION_KEY: any = generateEnv().ENCRYPTION_KEY;

    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(ENCRYPTION_KEY),
      iv
    );
    const encrypt = cipher.update(data);
    const encrypted_buffered = Buffer.concat([encrypt, cipher.final()]);
    const convert_hex = `${iv.toString("hex")}:${encrypted_buffered.toString(
      "hex"
    )}`;
    return convert_hex;
  }
  Generate_RandomString() {
    return Math.random().toString(36);
  }
}

const oServe_helper = new Helper();
export default oServe_helper;
