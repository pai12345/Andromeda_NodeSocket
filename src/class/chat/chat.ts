import oServe_socket from "../socket/socket";

class Chat {
  getmessage() {
    const io = oServe_socket.getIO();
    io.emit("posts", { action: "create", post: "post" });
  }
}

const oServe_Chat = new Chat();
export default oServe_Chat;
