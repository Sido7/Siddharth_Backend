import express from "express";
import userRouter from "./user.routes";
import userAddressRoutes from "./user.address";
import productRoutes from "./product.routes";

const router = express.Router();

router.use("/v1", userRouter);
router.use("/v1", userAddressRoutes);
router.use("/v1", productRoutes);

export default router;
