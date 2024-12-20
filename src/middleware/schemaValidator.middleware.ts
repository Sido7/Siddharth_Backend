import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod'; // Import ZodError for error handling
import { createUserSchema } from '../schema/user.schema';
import { UnprocessableEntityError } from '../exceptions/validation.error';
import { ErrorCode } from '../exceptions/base.error';

// Middleware to validate request body using Zod
export const validateSchema = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      
      schema.parse(req.body);
      next(); 
    } catch (error: any) {
        console.log(error)
        if (error instanceof ZodError) {
     next(new UnprocessableEntityError("Unprocessable Entity", ErrorCode.UNPROCESSABLE_ENTITY, error.issues));
  };
  throw error;
}
  };
}

