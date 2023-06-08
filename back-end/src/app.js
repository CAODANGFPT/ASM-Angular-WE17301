import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/ASM-ANGULAR");

export const viteNodeApp = app;
