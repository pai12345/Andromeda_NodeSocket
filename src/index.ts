import { http_status } from "./utility/interface";
import oServe_socket from "./class/socket/socket";
import initialiseSocket from "./routes/route";

//Generate express app configurations
const app = oServe_socket.configure_app();

//Create Express HTTP Server
const server = oServe_socket.create_express_server(app);

//Create SocketIO Server
const io = oServe_socket.socket_server(server);

//Initialise Socket
initialiseSocket(io);

//Server graceful exit
process.on("SIGTERM", () => {
  console.log(http_status.Closing_http_server);
  server.close(() => {
    console.log(http_status.Http_server_closed);
    process.exit(0);
  });
  process.exit(0);
});
