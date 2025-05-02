import { Router } from "express";
import { placeOrder, getAllOrders } from "../controllers/order.controller";

const router = Router();

router.post("/", placeOrder);
router.get("/orderhistory", getAllOrders);

export default router;
