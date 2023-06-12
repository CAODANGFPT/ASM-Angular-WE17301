import express from "express";
import { get, getAll, signin, update } from "../controllers/auth";
import { signup } from "../controllers/auth";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/User", getAll);
router.get("/User/:id", get);
router.put("/User/:id", update);




export default router;
