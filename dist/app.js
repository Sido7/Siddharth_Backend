"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const client_1 = require("@prisma/client");
const globalErrorHandler_middleware_1 = __importDefault(require("./middleware/globalErrorHandler.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.use(globalErrorHandler_middleware_1.default);
exports.prisma = new client_1.PrismaClient();
exports.default = app;
