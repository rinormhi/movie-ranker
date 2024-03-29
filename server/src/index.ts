import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRouter from "./routes/user";
import { addToWatchlist } from "./controllers/UserController";

dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

// Routes
app.use("/users", userRouter);

app.get("/", (req, res) => {
  // addToWatchlist(req, res);
  console.log(req);
});

app.listen(process.env.DEV_PORT, () => {
  console.log(`Server is running on port ${process.env.DEV_PORT}`);
});
