import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  username: String,
  userImage: String,
  id: String,
});

const UsersModel = mongoose.model("Users", UsersSchema);

export default UsersModel;
