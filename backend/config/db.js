import mongoose from "mongoose";
import { ENV } from "./env.js";
const { MONGO_URI } = ENV;
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully 😃");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};
