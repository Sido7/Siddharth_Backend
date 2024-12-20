import { BaseException, ErrorCode } from "./base.error";

export class InternalError extends BaseException{
    constructor(message: string, errorCode: ErrorCode, error: any) {
        super(message,500, errorCode, error);
    }
}