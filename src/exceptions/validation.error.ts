import { BaseException, ErrorCode } from "./base.error";

export const UnprocessableEntityError = class extends BaseException {
    constructor(message: string,errorCode: ErrorCode, error: any) {
        super(message,422, errorCode, error);
    }
}