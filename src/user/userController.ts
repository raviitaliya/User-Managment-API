import express, { NextFunction, Request, response, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { user } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, address, phone, photo } = req.body;

  if (!name || !email || !password || !address || !phone || !photo) {
    return next(createHttpError(400, "Missing data"));
  }

  //password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //creating user

  let newUser: user;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      photo,
    });
  } catch (error) {
    return next(createHttpError(500, "Error creating user"));
  }

  

export { createUser, getdata };
