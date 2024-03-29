import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  movieId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Watchlist = mongoose.model("Watchlist", watchlistSchema);
