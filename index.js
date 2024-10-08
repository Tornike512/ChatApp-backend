import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import receiveUser from "./Routes/ReceiveUser.js";
import SendUserData from "./Routes/SendUserData.js";
import SendAllUsers from "./Routes/SendAllUsers.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(receiveUser);
app.use(SendUserData);
app.use(SendAllUsers);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
