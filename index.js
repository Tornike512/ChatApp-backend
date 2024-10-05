import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import receiveUser from "./Routes/ReceiveUser.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(receiveUser);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
