import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "../routes/user.route.js";
import postRoutes from "../routes/post.route.js";
import { ENV } from "../config/env.js";
import { connectDB } from "../config/db.js";
const app = express();
const { PORT } = ENV;
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use((err, req, res) => {
  console.error("unhandled error:", err);
  res.status(500).json({ error: err.message || "internal server error" });
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
