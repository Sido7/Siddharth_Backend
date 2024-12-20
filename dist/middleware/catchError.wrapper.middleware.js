"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorWrapper = void 0;
const base_error_1 = require("../exceptions/base.error");
const internalError_1 = require("../exceptions/internalError");
const catchErrorWrapper = (controller) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield controller(req, res, next);
        }
        catch (error) {
            let exceptions;
            if (error instanceof base_error_1.BaseException) {
                exceptions = error;
            }
            else {
                exceptions = new internalError_1.InternalError("Something went wrong", base_error_1.ErrorCode.INTERNAL_ERROR, error);
            }
            next(exceptions);
        }
    });
};
exports.catchErrorWrapper = catchErrorWrapper;
