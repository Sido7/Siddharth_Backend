import { Request, Response, NextFunction } from 'express';
import { BaseException, ErrorCode } from '../exceptions/base.error';
import { InternalError } from '../exceptions/internalError';

export const catchErrorWrapper = (controller: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
        let exceptions: BaseException
        if (error instanceof BaseException) {
            exceptions = error;
        } else {
            exceptions = new InternalError("Something went wrong", ErrorCode.INTERNAL_ERROR, error);
        }
      next(exceptions); 
    }
  };
};