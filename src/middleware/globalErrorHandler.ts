import { HttpError } from "http-errors";
import { NextFunction,Response,Request } from "express";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: err.stack,
  });
};

export default globalErrorHandler;
