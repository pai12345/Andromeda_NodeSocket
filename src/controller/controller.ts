import { RequestHandler } from "express";
import oServe_Chat from "../class/chat/chat";

const Connect_Socketio: RequestHandler = (_req, res, next) => {
  try {
    oServe_Chat.getmessage();
    res.status(200).send("Test");
  } catch (error) {
    res.status(500).send(`${error}`);
    next(error);
  }
};

const generateController = () => {
  return {
    Connect_Socketio: Connect_Socketio,
  };
};

export default generateController;
