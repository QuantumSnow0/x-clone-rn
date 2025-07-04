import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to backend");
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
