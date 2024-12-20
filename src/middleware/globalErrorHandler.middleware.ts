import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../exceptions/badRequest.error";
import { UnprocessableEntityError } from "../exceptions/validation.error";
import { PasswordValidationError } from "../exceptions/password.validation.error";
import { BaseException } from "../exceptions/base.error";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err instanceof PasswordValidationError) {
    console.log(err);
    res.status(err.statusCode).json({ 
        message: err.message,
        errorCode: err.errorCode,
        error:err.error
    });
  }else if (err instanceof BadRequestError) {
    console.log(err);
    res.status(err.statusCode).json({
         message: err.message,
         errorCode: err.errorCode,
         error:err.error
         });
  }else if (err instanceof UnprocessableEntityError) {
    res.status(err.statusCode).json({
         message: err.message,
         errorCode: err.errorCode,
         error:err.error
         });
  }else if (err instanceof BaseException) {
     res.status(err.statusCode).json({
          message: err.message,
          errorCode: err.errorCode,
          error:err.error
          });
   }
   else {
    console.error(err); 
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

export default errorHandler;