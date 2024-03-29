import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  biography: String,
  birthday: String,
  deathday: String,
  gender: Number,
  id: Number,
  imdbId: Number,
  department: String,
  placeOfBirth: String,
  alsoKnowAs: Array,
});

export const Person = mongoose.model("Person", personSchema);
