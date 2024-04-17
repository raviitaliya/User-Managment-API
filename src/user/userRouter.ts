import express from 'express';
import {createUser,getdata} from './userController';

const userRouter = express.Router();

userRouter.post("/register",createUser);

userRouter.get("/data",getdata);



export default userRouter;