import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router


mongoose.connect("mongodb://127.0.0.1:27017/ASM-ANGULAR");

export const viteNodeApp = app;