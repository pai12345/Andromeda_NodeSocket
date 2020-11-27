import { Router } from "express";
import generateController from "../controller/controller";

const router = Router();
const Connect_Socketio = generateController().Connect_Socketio;

router.get("/", Connect_Socketio);

export default router;
