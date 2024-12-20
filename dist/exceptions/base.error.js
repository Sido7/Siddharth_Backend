"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.BaseException = void 0;
class BaseException extends Error {
    constructor(message, statusCode, errorCode, error) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
        this.errorCode = errorCode;
    }
}
exports.BaseException = BaseException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
    ErrorCode[ErrorCode["USER_ALREADY_EXIST"] = 1002] = "USER_ALREADY_EXIST";
    ErrorCode[ErrorCode["USER_NOT_AUTHORIZED"] = 1003] = "USER_NOT_AUTHORIZED";
    ErrorCode[ErrorCode["INVALID_PASSWORD"] = 1004] = "INVALID_PASSWORD";
    ErrorCode[ErrorCode["INVALID_USER"] = 1005] = "INVALID_USER";
    ErrorCode[ErrorCode["INVALID_TOKEN"] = 1006] = "INVALID_TOKEN";
    ErrorCode[ErrorCode["INVALID_REFRESH_TOKEN"] = 1007] = "INVALID_REFRESH_TOKEN";
    ErrorCode[ErrorCode["INVALID_EMAIL"] = 1008] = "INVALID_EMAIL";
    ErrorCode[ErrorCode["INVALID_PASSWORD_LENGTH"] = 1009] = "INVALID_PASSWORD_LENGTH";
    ErrorCode[ErrorCode["INVALID_REFRESH_TOKEN_LENGTH"] = 1010] = "INVALID_REFRESH_TOKEN_LENGTH";
    ErrorCode[ErrorCode["UNPROCESSABLE_ENTITY"] = 1011] = "UNPROCESSABLE_ENTITY";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 1012] = "INTERNAL_ERROR";
    ErrorCode[ErrorCode["TOKEN_NOT_FOUND"] = 1013] = "TOKEN_NOT_FOUND";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
