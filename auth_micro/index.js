import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import customRouter from "./router/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.json({ message: "Server is working fine..." });
});

app.use(customRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});