import generateController from "../controller/controller";
import { Server } from "socket.io";

const initialiseSocket = (io: Server) => {
  //CustomerCare Namespace
  generateController().CustomerCare(io);
  //Emergency Namespace
  generateController().Emergency(io);
};
export default initialiseSocket;
