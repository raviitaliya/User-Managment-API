import express from "express";
import userRouter from "./user/userRouter";
const app = express();

app.use("/",userRouter)


export default app;