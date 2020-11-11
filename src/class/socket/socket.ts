import { Server } from "http";
import oServe_helper from "../helper/helper";

class Socket {
  constructor() {}
  socket_init(server: Server) {
    const io = require("socket.io")(server);
    return io;
  }
  getsocket_io(io: any) {
    if (!io) {
      return oServe_helper.ResultObj(
        404,
        "Not Found",
        "Socket not initialized"
      );
    } else {
      return io;
    }
  }
}

const oServe_socket = new Socket();
export default oServe_socket;
