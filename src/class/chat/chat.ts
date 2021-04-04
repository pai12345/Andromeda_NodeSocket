import oServe_helper from "../helper/helper";
import { Socket } from "socket.io";

class Chat {
  Disconnect_socket(data: any) {
    console.log("user has been disconnected", data);
    return "user has been disconnected";
  }
  UserjoinedRoom_socket(socket: Socket) {
    const generateRoom_id = oServe_helper.Encrypt_data(
      oServe_helper.Generate_RandomString()
    );
    socket.join(generateRoom_id);
    return `User joined Room :${generateRoom_id}`;
  }
}

const oServe_Chat = new Chat();
export default oServe_Chat;
