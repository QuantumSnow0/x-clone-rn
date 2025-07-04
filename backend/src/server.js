import express from "express";
import "dotenv/config";
import { ENV } from "../config/env.js";
import { connectDB } from "../config/db.js";
const app = express();
connectDB();
const { PORT } = ENV;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to backend");
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
