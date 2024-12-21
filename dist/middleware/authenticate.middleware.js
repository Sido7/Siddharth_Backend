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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const unauthorised_error_1 = require("../exceptions/unauthorised.error");
const base_error_1 = require("../exceptions/base.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const notFound_error_1 = require("../exceptions/notFound.error");
const internalError_1 = require("../exceptions/internalError");
const repository_1 = require("../repository");
const secretes_1 = require("../secretes");
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const secreteKey = secretes_1.secretes.secreteKey;
    const token = req.headers['authorization'];
    if (!token) {
        next(new notFound_error_1.NotFoundError('Token not found', base_error_1.ErrorCode.TOKEN_NOT_FOUND, null));
    }
    const jwtToken = token === null || token === void 0 ? void 0 : token.split(' ')[1];
    try {
        if (typeof token !== 'string') {
            next(new unauthorised_error_1.UnAuthorisedError('Invalid token', base_error_1.ErrorCode.INVALID_TOKEN, null));
        }
        const payload = jsonwebtoken_1.default.verify(jwtToken, secreteKey);
        if (!payload) {
            next(new unauthorised_error_1.UnAuthorisedError('Invalid token', base_error_1.ErrorCode.INVALID_TOKEN, null));
        }
        const userEmail = payload['email'];
        const userExist = yield repository_1.userRepository.findAllUser({ email: userEmail });
        if (!userExist[0]) {
            return next(new notFound_error_1.NotFoundError('User not found', base_error_1.ErrorCode.USER_NOT_FOUND, null));
        }
        res.locals.id = userExist[0].id;
        res.locals.role = userExist[0].role;
        res.locals.email = userExist[0].email;
        next();
    }
    catch (error) {
        next(new internalError_1.InternalError('Something went wrong', base_error_1.ErrorCode.INTERNAL_ERROR, error));
    }
});
exports.authenticate = authenticate;
