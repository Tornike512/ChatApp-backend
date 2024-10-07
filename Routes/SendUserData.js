import express from "express";
import UsersModel from "../Models/UsersModel.js";

const SendUserData = express.Router();

SendUserData.get("/user", async (req, res) => {
  const { username } = req.query;

  const user = await UsersModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send(user);
});

export default SendUserData;
