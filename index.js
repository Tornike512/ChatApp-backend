import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UsersModel from "./Models/UsersModel.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(() => {
  console.log(`Listening on Port ${PORT}`);
});
