import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  age: Number,
});

const todoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

export const User = mongoose.model("User", userSchema);
export const Todo = mongoose.model("Todo", todoSchema);
