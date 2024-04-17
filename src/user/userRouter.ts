import express from 'express';

const userRouter = express.Router();

userRouter.get("/api",(req,res)=>{
    res.json({"massage":"hello"})
})


export default userRouter;