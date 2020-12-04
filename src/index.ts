import { http_status, Sockets_enum } from "./utility/interface";
import oServe_socket from "./class/socket/socket";
import { Socket } from "socket.io";

//Generate express app configurations
const app = oServe_socket.configure_app();

//Create Express HTTP Server
const server = oServe_socket.create_express_server(app);

//Create Websocket Server
const io = oServe_socket.socket_server(server);

// Initialise Socket Server
io.on(Sockets_enum.connection, (socket: Socket) => {
  console.log(`${Sockets_enum.Socket_Connected}`);

  socket.emit("userjoined", "user has joined the chat");

  socket.on("chatmessage", (data_message) => {
    console.log("Message:", data_message);
  });

  //Close Socket
  socket.on("disconnect", (data) => {
    console.log("user has been disconnected:", data);
  });
});

//Server graceful exit
process.on("SIGTERM", () => {
  console.log(http_status.Closing_http_server);
  server.close(() => {
    console.log(http_status.Http_server_closed);
    process.exit(0);
  });
  process.exit(0);
});
