"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRepository = exports.productRepository = exports.userAddressRepository = exports.userRepository = void 0;
const user_repository_1 = __importDefault(require("./user.repository"));
exports.userRepository = user_repository_1.default;
const user_address_repository_1 = __importDefault(require("./user.address.repository"));
exports.userAddressRepository = user_address_repository_1.default;
const product_repository_1 = __importDefault(require("./product.repository"));
exports.productRepository = product_repository_1.default;
const order_repository_1 = __importDefault(require("./order.repository"));
exports.orderRepository = order_repository_1.default;
