import mongoose from "mongoose";

const favoriteMoviesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    validate: {
      validator: function (v: any) {
        return Number.isInteger(v) && v >= 0; // Wertebereich validiert
      },
      message: (props: any) => `${props.value} ist keine gültige Position!`,
    },
  },
});

export const FavoriteMovies = mongoose.model(
  "FavoriteMovies",
  favoriteMoviesSchema
);
