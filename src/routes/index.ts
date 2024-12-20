import express from "express";
import userRouter from "./user.routes";
import userAddressRoutes from "./user.address";

const router = express.Router();

router.use("/v1", userRouter);
router.use("/v1", userAddressRoutes);

export default router;
