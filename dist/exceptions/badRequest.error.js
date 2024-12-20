"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const base_error_1 = require("./base.error");
class BadRequestError extends base_error_1.BaseException {
    constructor(message, errorCode) {
        super(message, 400, errorCode, null);
    }
}
exports.BadRequestError = BadRequestError;
