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
const badRequest_error_1 = require("../exceptions/badRequest.error");
const base_error_1 = require("../exceptions/base.error");
const repository_1 = require("../repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const password_validation_error_1 = require("../exceptions/password.validation.error");
const secretes_1 = require("../secretes");
function createUserService(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userExist = yield repository_1.userRepository.findAllUser({ email: userData.email });
            if (userExist[0]) {
                throw new badRequest_error_1.BadRequestError('User already exist', base_error_1.ErrorCode.USER_ALREADY_EXIST);
            }
            const hashPassword = bcrypt_1.default.hashSync(userData.password, 10);
            const result = yield repository_1.userRepository.createUser(Object.assign(Object.assign({}, userData), { password: hashPassword }));
            return result;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
function loginUserService(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const secretKey = secretes_1.secretes.secreteKey;
            const userExist = yield repository_1.userRepository.findAllUser({ email: userData.email });
            if (!userExist[0]) {
                throw new badRequest_error_1.BadRequestError('User not found', base_error_1.ErrorCode.USER_NOT_FOUND);
            }
            const userPassword = userExist[0].password;
            if (!bcrypt_1.default.compareSync(userData.password, userPassword)) {
                throw new password_validation_error_1.PasswordValidationError('Invalid password', base_error_1.ErrorCode.INVALID_PASSWORD);
            }
            const token = jsonwebtoken_1.default.sign({ email: userExist[0].email, role: userExist[0].role, id: userExist[0].id }, secretKey, { expiresIn: '1d' });
            return token;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
function findMeService(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield repository_1.userRepository.findUser(email);
            return result;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
exports.default = {
    createUserService,
    findMeService,
    loginUserService
};
