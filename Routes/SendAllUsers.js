import express from "express";
import UsersModel from "../Models/UsersModel.js";

const SendAllUsers = express.Router();

SendAllUsers.get("/all-users", async (req, res) => {
  const allUsers = await UsersModel.find({}, "username");

  res.status(200).send(allUsers);
});

export default SendAllUsers;
