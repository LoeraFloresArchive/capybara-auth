export class ExpressError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
export class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

export class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

export class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class ForbiddenError extends ExpressError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}
