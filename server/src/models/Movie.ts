import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: String,
  releaseDate: Date,
  tmdbId: {
    type: String,
    required: true,
  },
  imdbId: {
    type: String,
  },
  backdropPath: String,
  id: Number,
  voteAverage: Number,
  voteCount: Number,
});

export const Movie = mongoose.model("Movie", movieSchema);
