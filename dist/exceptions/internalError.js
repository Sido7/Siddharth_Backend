"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
const base_error_1 = require("./base.error");
class InternalError extends base_error_1.BaseException {
    constructor(message, errorCode, error) {
        super(message, 500, errorCode, error);
    }
}
exports.InternalError = InternalError;
