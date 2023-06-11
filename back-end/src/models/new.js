import { date } from "joi";
import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date,
    },
    describe: {
        type: String,
    },
    description: {
        type: String,
    },
},{timestamps: true, versionKey: false})

export default mongoose.model('New', newSchema)