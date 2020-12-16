import { Server, Socket } from "socket.io";
import { Sockets_enum } from "../../utility/interface";
import oServe_Chat from "../../class/chat/chat";

/**
 * Namespace - Customer Care
 * @param io Socket IO Server
 * @description Function for Customer Care Namespace.
 */
const CustomerCare = (io: Server) => {
  try {
    const CustomerCare_io = io.of("/CustomerCare");

    CustomerCare_io.on(Sockets_enum.connection, (socket: Socket) => {
      //User Joined
      socket.emit("userjoined", oServe_Chat.userjoined_socket);

      //Listen to Message
      socket.on("chatmessage", oServe_Chat.chatmessage_socket);

      //Close Socket
      socket.on("disconnect", oServe_Chat.disconnect_socket);
    });
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Namespace - Emergency
 * @param io Socket IO Server
 * @description Function for Emergency Namespace.
 */
const Emergency = (io: Server) => {
  try {
    const Emergency_io = io.of("/Emergency");
    console.log(io);

    Emergency_io.on(Sockets_enum.connection, (socket: Socket) => {
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
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Function - Controller
 * @description
 * Function to generate controller functions.
 */
const generateController = () => {
  return {
    CustomerCare: CustomerCare,
    Emergency: Emergency,
  };
};

export default generateController;
