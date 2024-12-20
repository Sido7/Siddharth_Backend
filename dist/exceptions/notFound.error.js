"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const base_error_1 = require("./base.error");
const NotFoundError = class extends base_error_1.BaseException {
    constructor(message, errorCode, error) {
        super(message, 404, errorCode, error);
    }
};
exports.NotFoundError = NotFoundError;
