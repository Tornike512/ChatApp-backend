import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  userName: String,
  userImage: String,
});

const UsersModel = mongoose.model("Users", UsersSchema);

export default UsersModel;
