"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorisedError = void 0;
const base_error_1 = require("./base.error");
class UnAuthorisedError extends base_error_1.BaseException {
    constructor(message, errorCode, error) {
        super(message, 401, errorCode, error);
    }
}
exports.UnAuthorisedError = UnAuthorisedError;
