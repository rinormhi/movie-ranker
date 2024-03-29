import mongoose, { mongo } from "mongoose";

const reviewSchema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: String,
  id: String,
  updatedAt: String,
  url: String,
});

export const Review = mongoose.model("Review", reviewSchema);
