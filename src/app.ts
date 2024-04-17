import express from "express";
import userRouter from "./user/userRouter";
import globalErrorHandler from "./middleware/globalErrorHandler";
const app = express();
app.use(express.json());
app.use("/api/users",userRouter);


app.use(globalErrorHandler);



export default app;