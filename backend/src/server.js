import express from "express";
import { ENV } from "../config/env.js";
import { connectDB } from "../config/db.js";
const app = express();
const { PORT } = ENV;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to backend");
});
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("failed to start server".error);
    process.exit(1);
  }
};
startServer();
