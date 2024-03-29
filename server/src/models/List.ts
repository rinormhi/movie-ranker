import mongoose, { mongo } from "mongoose";

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  posterPath: String,
  description: String,
  id: Number,
  itemCount: Number,
  favoriteCount: Number,
  listType: String,
});

export const List = mongoose.model("List", listSchema);
