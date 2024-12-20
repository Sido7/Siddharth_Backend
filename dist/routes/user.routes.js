"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const catchError_wrapper_middleware_1 = require("../middleware/catchError.wrapper.middleware");
const schemaValidator_middleware_1 = require("../middleware/schemaValidator.middleware");
const user_schema_1 = require("../schema/user.schema");
const user_loging_schema_1 = require("../schema/user.loging.schema");
const authenticate_middleware_1 = require("../middleware/authenticate.middleware");
const router = express_1.default.Router();
router.post('/signup', (0, schemaValidator_middleware_1.validateSchema)(user_schema_1.createUserSchema), (0, catchError_wrapper_middleware_1.catchErrorWrapper)(user_controller_1.createUser));
router.post('/login', (0, schemaValidator_middleware_1.validateSchema)(user_loging_schema_1.loginSchema), (0, catchError_wrapper_middleware_1.catchErrorWrapper)(user_controller_1.login));
router.get("/me", authenticate_middleware_1.authenticate, (0, catchError_wrapper_middleware_1.catchErrorWrapper)(user_controller_1.findUser));
exports.default = router;
