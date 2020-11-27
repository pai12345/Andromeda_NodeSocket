//=============================Enum================================//
/**
 * Enumeration for Sockets
 * @description
 * Enumeration having details for Sockets
 */
export enum Sockets_enum {
  Socket_Connected = "Socket Connection Established",
  connection = "connection",
  Socket_Connection_NotFound = "Socket Connection not initialized",
}

/**
 * Enumeration for HTTP Status
 * @description
 * Enumeration having details for HTTP Status
 */
export enum http_status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
  Unavailable = 503,
  BADREQUEST = 400,
  BADREQUESTMessage = "Bad Request",
  ServerErrorMessage = "Server Error",
  SuccessMessage = "Success",
  ErrorMessage = "Error",
  WebServerTitle = "Web Server",
  WebServerBody = "Microservice Web Server",
  PageNotFoundTitlte = "Service Not Found",
  PageNotFoundBody = `404 - Service Not Found`,
  NotFoundMessage = "Not Found",
  ListeningonPort = "Listening on Port",
  NotResponding = "Server did not response with any valid data",
  MongoDB_session_error = "Mongo session error",
  Closing_http_server = "Closing http server",
  Http_server_closed = "Http server closed",
}
