import express from "express";
import UsersModel from "../Models/UsersModel.js";

const receiveUser = express.Router();

receiveUser.post("/user", async (req, res) => {
  const { name, image } = req.body;

  const newUser = new UsersModel({ username: name, userImage: image });
  await newUser.save();

  res.status(201).send(newUser);
});

export default receiveUser;
