class ServerError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }

  static badRequest(message) {
    return new ServerError(404, message);
  }

  static internal(message) {
    return new ServerError(500, message);
  }

  static forbidden(message) {
    return new ServerError(403, message);
  }
}

module.exports = ServerError;
