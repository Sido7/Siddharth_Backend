"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = exports.productService = exports.userAddressService = exports.userService = void 0;
const user_service_1 = __importDefault(require("./user.service"));
exports.userService = user_service_1.default;
const user_address_service_1 = __importDefault(require("./user.address.service"));
exports.userAddressService = user_address_service_1.default;
const product_service_1 = __importDefault(require("./product.service"));
exports.productService = product_service_1.default;
const order_service_1 = __importDefault(require("./order.service"));
exports.orderService = order_service_1.default;
