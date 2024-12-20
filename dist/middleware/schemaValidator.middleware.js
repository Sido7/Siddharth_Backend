"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const zod_1 = require("zod"); // Import ZodError for error handling
const validation_error_1 = require("../exceptions/validation.error");
const base_error_1 = require("../exceptions/base.error");
// Middleware to validate request body using Zod
const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            console.log(error);
            if (error instanceof zod_1.ZodError) {
                next(new validation_error_1.UnprocessableEntityError("Unprocessable Entity", base_error_1.ErrorCode.UNPROCESSABLE_ENTITY, error.issues));
            }
            ;
            throw error;
        }
    };
};
exports.validateSchema = validateSchema;
