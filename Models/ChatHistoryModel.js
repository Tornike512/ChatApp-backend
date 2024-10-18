import mongoose from "mongoose";

const ChatHistoryModel = new mongoose.Schema({
  username: String,
  userImage: String,
  id: String,
  message: String,
});

const ChatHistory = mongoose.model("ChatHistory", ChatHistoryModel);

export default ChatHistory;
