"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "User name is required").max(30, "User name must be less than 30 characters").regex(/^[a-zA-Z ]+$/, "User name must be only letters and spaces"),
    email: zod_1.z.string().email("Invalid email").min(1, "Email is required").max(50, "Email must be less than 50 characters"),
    password: zod_1.z.string().min(8, "Password must grter than 8 characters"),
    role: zod_1.z.enum(["user", "admin"]).default("user")
});
