import { BaseException, ErrorCode } from "./base.error";

export const NotFoundError = class extends BaseException {
    constructor(message: string,errorCode: ErrorCode, error: any) {
        super(message,404, errorCode, error);
    }
}