import { BaseException, ErrorCode } from "./base.error"

export class BadRequestError extends BaseException{
    constructor(message: string, errorCode: ErrorCode,) {
        super(message, 400, errorCode, null);
}
}