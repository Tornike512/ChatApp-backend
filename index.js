import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import receiveUser from "./Routes/ReceiveUser.js";
import SendUserData from "./Routes/SendUserData.js";
import SendAllUsers from "./Routes/SendAllUsers.js";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const server = createServer(app);

app.use(express.json());
app.use(cors());

const io = new Server(server);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(receiveUser);
app.use(SendUserData);
app.use(SendAllUsers);

io.on("connection", (socket) => {
  socket.emit("Send message");

  socket.on("receive message", (arg) => {
    console.log(arg);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
