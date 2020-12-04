import { RequestHandler } from "express";
import { http_status } from "../utility/interface";

/**
 * Middleware - Route Validation
 * @description
 * Middleware to validate routes
 */
const route_middleware: RequestHandler = async (_req, res) => {
  try {
    res.status(http_status.NotFound).send(http_status.ServiceNotFound);
  } catch (error) {
    res.status(error.esponse.status).send(error);
  }
};

export default route_middleware;
