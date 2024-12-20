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
exports.findUser = exports.createUser = exports.login = void 0;
const services_1 = require("../services");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield services_1.userService.createUserService(data);
    res.status(201).json(result);
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userToken = yield services_1.userService.loginUserService(req.body);
    res.status(200).json({
        message: 'Login success',
        token: userToken
    });
});
exports.login = login;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const result = yield services_1.userService.findMeService(userId);
    res.status(201).json(result);
});
exports.findUser = findUser;
