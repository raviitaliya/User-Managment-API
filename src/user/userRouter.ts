import express from 'express';
import {createUser} from './userController';

const userRouter = express.Router();

userRouter.use("/api/users",createUser);


export default userRouter;