import express from "express";
import ChatHistory from "../Models/ChatHistoryModel";

const router = express.Router();

router.get("/messages", async (req, res) => {
  try {
    const messages = await ChatHistory.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

router.post("/messages", async (req, res) => {
  const { username, userImage, id, message } = req.body;
  const newMessage = new ChatHistory({ username, userImage, id, message });
  try {
    await newMessage.save();
    res.status(200).json({ message: "Message saved" });
  } catch (err) {
    res.status(500).json({ error: "Error saving message" });
  }
});

export default router;
