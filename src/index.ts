import generateEnv from "./config/config";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { http_status, Sockets_enum } from "./utility/interface";

const PORT = generateEnv().PORT;
const app = express();
const cors_option = { origin: "*" };

//Set to app
app.set("trust proxy", 1);

//Std Middelwares
app.use(json());
app.use(cors(cors_option));
app.use(helmet());
app.use(compression());
app.options("*", cors());

// Server Listener
const server = app.listen(PORT, () => {
  console.log(`${http_status.ListeningonPort}: ${PORT}`);
});

//Socket Connection
const io = require("socket.io")(server);

io.on(Sockets_enum.connection, () => {
  console.log(`${http_status.Socket_Connected}`);
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
