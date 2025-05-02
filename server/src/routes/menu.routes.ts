import { Router } from "express";
import { getMenuItems, seedMenuItems } from "../controllers/menu.controller";

const router = Router();

router.get("/", getMenuItems);
router.post("/seed", seedMenuItems); 

export default router;
