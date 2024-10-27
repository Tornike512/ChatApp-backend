import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  username: { type: String, required: false },
  userImage: { type: String, required: false },
  id: { type: String, required: false },
});

const UsersModel = mongoose.model("Users", UsersSchema);

export default UsersModel;
