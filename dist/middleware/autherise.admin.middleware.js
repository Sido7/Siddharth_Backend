"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autheriseAdmin = void 0;
const base_error_1 = require("../exceptions/base.error");
const unauthorised_error_1 = require("../exceptions/unauthorised.error");
const internalError_1 = require("../exceptions/internalError");
const autheriseAdmin = (req, res, next) => {
    try {
        if (res.locals.role !== 'Admin') {
            next(new unauthorised_error_1.UnAuthorisedError('You are not an admin', base_error_1.ErrorCode.USER_NOT_AUTHORIZED, null));
            return;
        }
        next();
    }
    catch (error) {
        throw new internalError_1.InternalError('Something went wrong', base_error_1.ErrorCode.INTERNAL_ERROR, error);
    }
};
exports.autheriseAdmin = autheriseAdmin;
