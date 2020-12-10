import { Server } from "http";
import express, { Express, json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import oServe_helper from "../helper/helper";
import {
  http_status,
  Sockets_enum,
  generic_status,
} from "../../utility/interface";
import route_middleware from "../../middleware/route";
import generateEnv from "../../config/config";
class Socket {
  private io: any;
  constructor() {
    this.io;
  }
  configure_app() {
    try {
      const app = express();
      const cors_option = { origin: "*" };

      //Set to app
      app.set("trust proxy", 1);

      //Std Middelwares
      app.use(json());
      app.use(cors(cors_option));
      app.use(helmet());
      app.use(compression());
      app.use(route_middleware);
      // app.use("/", router);

      return app;
    } catch (error) {
      return error;
    }
  }
  create_express_server(app: Express) {
    try {
      const PORT = generateEnv().PORT;
      const server = app
        .listen(PORT, () => {
          console.log(`${http_status.ListeningonPort}: ${PORT}`);
        })
        .on(generic_status.Error, (err) => {
          console.log(`${generic_status.ErrorAppStartup}: ${err}`);
        });
      return server;
    } catch (error) {
      return error;
    }
  }
  socket_server(server: Server) {
    try {
      this.io = require("socket.io")(server, {
        cors: {
          origin: "*",
        },
      });
      return this.io;
    } catch (error) {
      return error;
    }
  }
  getIO() {
    try {
      const check = this.io ?? Sockets_enum.Socket_Connection_NotFound;
      if (!check) {
        return oServe_helper.ResultObj(
          http_status.NotFound,
          http_status.NotFoundMessage,
          check
        );
      } else {
        return oServe_helper.ResultObj(
          http_status.Success,
          http_status.SuccessMessage,
          this.io
        );
      }
    } catch (error) {
      return error;
    }
  }
}

const oServe_socket = new Socket();
export default oServe_socket;
