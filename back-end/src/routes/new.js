import express from "express";
import { create, getAll, remove, update, get } from "../controllers/new";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.post("/new",checkPermission, create)
router.get("/new/", getAll)
router.get("/new/:id", get)
router.put("/new/:id",checkPermission, update)
router.delete("/new/:id",checkPermission, remove)



export default router;