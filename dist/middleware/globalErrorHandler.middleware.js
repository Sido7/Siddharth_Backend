"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const badRequest_error_1 = require("../exceptions/badRequest.error");
const validation_error_1 = require("../exceptions/validation.error");
const password_validation_error_1 = require("../exceptions/password.validation.error");
const base_error_1 = require("../exceptions/base.error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof password_validation_error_1.PasswordValidationError) {
        console.log(err);
        res.status(err.statusCode).json({
            message: err.message,
            errorCode: err.errorCode,
            error: err.error
        });
    }
    else if (err instanceof badRequest_error_1.BadRequestError) {
        console.log(err);
        res.status(err.statusCode).json({
            message: err.message,
            errorCode: err.errorCode,
            error: err.error
        });
    }
    else if (err instanceof validation_error_1.UnprocessableEntityError) {
        res.status(err.statusCode).json({
            message: err.message,
            errorCode: err.errorCode,
            error: err.error
        });
    }
    else if (err instanceof base_error_1.BaseException) {
        res.status(err.statusCode).json({
            message: err.message,
            errorCode: err.errorCode,
            error: err.error
        });
    }
    else {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
exports.default = errorHandler;
