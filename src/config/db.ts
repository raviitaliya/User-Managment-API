import mongoose from "mongoose";
import { config } from "./config";

const connect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected to mongoDB");
    });

    mongoose.connection.on("error", () => {
        console.log("error while connection..");
      });

    const connect = await mongoose.connect(config.database as string);
  } catch (error) {
    console.error("database connection error...", error);
  }
};

export default connect;
