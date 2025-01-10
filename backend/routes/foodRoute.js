import express from "express";

import multer from "multer";
import { addFood } from "../controllers/foodController.js";

const foodRouter = express.Router()

// Image Storeage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Ensure 'uploads/' folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)

export default foodRouter;