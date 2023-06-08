import express from "express";
import { signin } from "../controllers/auth";
import { signup } from "../controllers/auth";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
