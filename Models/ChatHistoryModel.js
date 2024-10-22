import mongoose from "mongoose";

const ChatHistoryModel = new mongoose.Schema({
  username: { type: String, required: true },
  userImage: { type: String, required: true },
  id: { type: String, required: true },
  message: { type: String, required: true },
});

const ChatHistory = mongoose.model("ChatHistory", ChatHistoryModel);

export default ChatHistory;
