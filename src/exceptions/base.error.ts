export class BaseException extends Error {
    message: string;
    statusCode: any;
    errorCode: ErrorCode;
    error: any

    constructor(message: string, statusCode: number, errorCode: ErrorCode, error: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
        this.errorCode = errorCode;
    }
}


 export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXIST = 1002,
    USER_NOT_AUTHORIZED = 1003,
    INVALID_PASSWORD = 1004,
    INVALID_USER = 1005,
    INVALID_TOKEN = 1006,
    INVALID_REFRESH_TOKEN = 1007,
    INVALID_EMAIL = 1008,
    INVALID_PASSWORD_LENGTH = 1009,
    INVALID_REFRESH_TOKEN_LENGTH = 1010,
    UNPROCESSABLE_ENTITY = 1011,
    INTERNAL_ERROR = 1012,
    TOKEN_NOT_FOUND = 1013
}
