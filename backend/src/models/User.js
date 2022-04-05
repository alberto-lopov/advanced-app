import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean
});

export const User = mongoose.model("User", userSchema);