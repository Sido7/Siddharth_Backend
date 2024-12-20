"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = void 0;
const base_error_1 = require("./base.error");
const UnprocessableEntityError = class extends base_error_1.BaseException {
    constructor(message, errorCode, error) {
        super(message, 422, errorCode, error);
    }
};
exports.UnprocessableEntityError = UnprocessableEntityError;
