import mongoose from "mongoose";

const ChatHistoryModel = new mongoose.Schema({
  username: { type: String, required: false },
  userImage: { type: String, required: false },
  id: { type: [String], required: false },
  message: { type: String, required: false },
});

const ChatHistory = mongoose.model("ChatHistory", ChatHistoryModel);

export default ChatHistory;
