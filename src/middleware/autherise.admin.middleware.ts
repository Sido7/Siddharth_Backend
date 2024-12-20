import { Request,Response,NextFunction } from "express";
import { ErrorCode } from "../exceptions/base.error";
import { UnAuthorisedError } from "../exceptions/unauthorised.error";
import { InternalError } from "../exceptions/internalError";


export const autheriseAdmin = (req: Request, res: Response, next: NextFunction) => {
    try{
        if(res.locals.role !== 'Admin'){
            next(new UnAuthorisedError('You are not an admin',ErrorCode.USER_NOT_AUTHORIZED,null))
            return;
        }
        next();
    }catch(error){
        throw new InternalError('Something went wrong',ErrorCode.INTERNAL_ERROR,error)
    }
}