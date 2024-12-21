"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretes = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.secretes = {
    Port: process.env.PORT,
    secreteKey: process.env.SECRETE_KEY,
    email: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    admin: process.env.ADMIN_EMAIL
};
