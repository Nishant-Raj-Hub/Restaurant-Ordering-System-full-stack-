import { Router } from "express";
import { placeOrder, getOrdersByPhone } from "../controllers/order.controller";

const router = Router();

router.post("/", placeOrder);
router.get("/:phone", getOrdersByPhone);

export default router;
