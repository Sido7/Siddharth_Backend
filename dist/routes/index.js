"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user.routes"));
const user_address_1 = __importDefault(require("./user.address"));
const product_routes_1 = __importDefault(require("./product.routes"));
const order_routes_1 = __importDefault(require("./order.routes"));
const router = express_1.default.Router();
router.use("/v1", user_routes_1.default);
router.use("/v1", user_address_1.default);
router.use("/v1", product_routes_1.default);
router.use("/v1", order_routes_1.default);
exports.default = router;
