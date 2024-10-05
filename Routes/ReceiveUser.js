import express from "express";
import UsersModel from "../Models/UsersModel.js";

const receiveUser = express.Router();

receiveUser.post("/user", async (req, res) => {
  const { user } = req.body;

  const newUser = new UsersModel(user);
  await newUser.save();

  res.status(201).send(newUser);
});

export default receiveUser;
