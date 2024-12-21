import express from "express";
import { createOrder, cancelOrder, readOrder, deleteOrder } from "../controller/order.controller";
import { authenticate } from "../middleware/authenticate.middleware";
import { catchErrorWrapper } from "../middleware/catchError.wrapper.middleware";
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { createOrderSchema, updateOrderSchema} from "../schema/createOrder.schema";



const router = express.Router();

router.post("/order", authenticate, validateSchema(createOrderSchema), catchErrorWrapper(createOrder));
router.get("/order", authenticate, catchErrorWrapper(readOrder));
router.put("/order/:id", authenticate, validateSchema(updateOrderSchema), catchErrorWrapper(cancelOrder));
router.delete("/order/:id", authenticate, catchErrorWrapper(deleteOrder));

export default router;