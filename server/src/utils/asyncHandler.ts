import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../middlewares/errorHandler";


export const asyncHandler =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch((err: any) => {
      if (!(err instanceof AppError)) {
        // If it's a server error, log it (maybe use a logging library)
        console.error(err);
        return next(new AppError("Internal Server Error", 500));
      }
      next(err); // Pass the operational error to the next middleware
    });
  };
export default asyncHandler;
