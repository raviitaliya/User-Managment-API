import express from "express";
import { createUser, getdata , update } from "./userController";
import multer from "multer";
import path from "path";

const userRouter = express.Router();

const fileUpload = multer({
    dest: path.resolve(__dirname,'../../public/data/uploads')
});

userRouter.post("/user", fileUpload.single('photo'), createUser);

userRouter.get("/user", getdata);

userRouter.put("/user", update);


export default userRouter;
