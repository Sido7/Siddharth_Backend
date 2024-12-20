import { BaseException, ErrorCode } from "./base.error";

export class UnAuthorisedError  extends BaseException {
    constructor(message: string,errorCode: ErrorCode, error: any) {
        super(message,401, errorCode, error);
    }
}