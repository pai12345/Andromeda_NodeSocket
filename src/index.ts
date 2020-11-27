import generateEnv from "./config/config";
import { http_status, Sockets_enum } from "./utility/interface";
import oServe_socket from "./class/socket/socket";
import { Socket } from "socket.io";

const PORT = generateEnv().PORT;
const app = oServe_socket.create_app();

//Create HTTP Server
const server = oServe_socket.create_server(app);
// Initialise Socket
const io = oServe_socket.socket_initialise(server);

io.on(Sockets_enum.connection, (_socket: Socket) => {
  console.log(`${Sockets_enum.Socket_Connected}`);
});

server.listen(PORT, () => {
  console.log(`${http_status.ListeningonPort}: ${PORT}`);
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
