import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import receiveUser from "./Routes/ReceiveUser.js";
import SendUserData from "./Routes/SendUserData.js";
import SendAllUsers from "./Routes/SendAllUsers.js";
import messages from "./Routes/Message.js";
import { Server } from "socket.io";
import { createServer } from "http";
import ChatHistory from "./Models/ChatHistoryModel.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use(receiveUser);
app.use(SendUserData);
app.use(SendAllUsers);
app.use(messages);

io.on("connection", (socket) => {
  socket.on("message", async ({ username, userImage, id, message }) => {
    const newMessage = new ChatHistory({ username, userImage, id, message });
    await newMessage.save();
    io.emit("message", { username, userImage, id, message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
