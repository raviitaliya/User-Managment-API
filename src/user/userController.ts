import express, { NextFunction, Request, response, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { user } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, address, phone } = req.body;

  if (!name || !email || !password || !address || !phone) {
    return next(createHttpError(400, "Missing data"));
  }

  //password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //creating user

  let newUser: user;

  let photos = req.file?.filename;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      photo: photos,
    });
  } catch (error) {
    return next(createHttpError(500, "Error creating user"));
  }

  //user status
  try {
    const id = newUser._id;
    res.json({ id });
  } catch (error) {
    return next(createHttpError(500, "Error creating user"));
  }
};

const getdata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userModel.find().select("-password");
    res.json({ data });
  } catch (error) {
    return next(createHttpError(500, "error while getting user..."));
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  let { _id } = req.body;

  if (!_id) {
    return res.status(400).json({
      message: "id is required",
    });
  }

  try {
    let user = await userModel.findOne({ _id });

    if (user == null) {
      return res.status(400).json({
        message: "id is invalid",
      });
      
    }

    console.log(user);
    

    user.name=req.body.name || user.name;
    user.email=req.body.email || user.email;
    user.password=req.body.password ?  await bcrypt.hash(req.body.password, 10) : user.password;
    user.address=req.body.address || user.address;
    user.phone=req.body.phone || user.phone;

    await user.save();


    res.json({
        message: "user updated successfully",
        user,
      });
  } catch (error) {
    return next(createHttpError(500, "error while getting user..."));
  }


};

export { createUser, getdata, update };
