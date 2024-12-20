import { BaseException, ErrorCode } from "./base.error";

export class PasswordValidationError extends BaseException {
    constructor(message: string, errorCode: ErrorCode){
        super(message, 401, errorCode, null);
    }
}