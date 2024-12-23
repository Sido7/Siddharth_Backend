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
const app_1 = require("../app");
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield app_1.prisma.user.create({
            data: userData
        });
        return user;
    });
}
function findUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield app_1.prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            }
        });
        return user;
    });
}
function findAllUser(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = {};
        if (payload.email) {
            filter.email = payload.email;
        }
        const user = yield app_1.prisma.user.findMany({
            where: filter,
        });
        return user;
    });
}
function fetchUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return app_1.prisma.user.findUnique({
            where: { id: userId },
        });
    });
}
;
exports.default = {
    createUser,
    findUser,
    findAllUser,
    fetchUserById
};
