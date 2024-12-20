"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidationError = void 0;
const base_error_1 = require("./base.error");
class PasswordValidationError extends base_error_1.BaseException {
    constructor(message, errorCode) {
        super(message, 401, errorCode, null);
    }
}
exports.PasswordValidationError = PasswordValidationError;
