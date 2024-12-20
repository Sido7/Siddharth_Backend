import express from "express";
import { createProductSchema, } from "../schema/product.schema";
import { createProductController, updateProductController, delteProductController, findProductController } from "../controller/product.controller"; 
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { authenticate } from "../middleware/authenticate.middleware";
import { autheriseAdmin } from "../middleware/autherise.admin.middleware";
import { catchErrorWrapper } from "../middleware/catchError.wrapper.middleware";

const Router = express.Router();

Router.post('/product', validateSchema(createProductSchema),authenticate,autheriseAdmin,catchErrorWrapper(createProductController));
Router.put('/product/:id', validateSchema(createProductSchema),authenticate,autheriseAdmin,catchErrorWrapper(updateProductController));
Router.get("/product",authenticate,catchErrorWrapper(findProductController))
Router.delete("/product/:id",authenticate,autheriseAdmin,catchErrorWrapper(delteProductController))


export default Router