import express from "express";
import UsersModel from "../Models/UsersModel.js";

const SendAllUsers = express.Router();

SendAllUsers.get("/all-users", async (req, res) => {
  const { users } = req.body;
  console.log(req.body);

  const allUsers = await UsersModel.find({
    users,
  });

  res.status(200).send(allUsers);
});

export default SendAllUsers;
