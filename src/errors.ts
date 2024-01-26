class ExpressError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

class ForbiddenError extends ExpressError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}


module.exports = {
  ExpressError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
}
