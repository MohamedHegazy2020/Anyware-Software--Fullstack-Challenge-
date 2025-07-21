import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  status: number;
  isOperational: boolean;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  constructor(success: boolean, data?: T, message?: string) {
    this.success = success;
    if (data !== undefined) this.data = data;
    if (message) this.message = message;
  }
}

const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof AppError ? err.status : 500;
  const message = err.message || "Internal Server Error";
  console.error(`[Error] ${status} - ${message}`);
  res.status(status).json(new ApiResponse(false, undefined, message));
};

export default errorHandler;
