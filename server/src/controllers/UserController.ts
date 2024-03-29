// Models
import { FavoriteMovies } from "../models/FavoriteMovies";
import { User } from "../models/User";
import { Watchlist } from "../models/Watchlist";

import { Request, Response } from "express";

// Delete User
export async function deleteUser(req: Request, res: Response) {
  try {
    const { email } = req.query;
    await User.deleteOne({ email });
    res.json({ message: "Deleted user." });
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
}

// Create User
export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.query;
    await User.create({ username, email, password });
    res.status(201).json({ message: "Created user." });
  } catch (error) {
    console.error("Error creating user:", error); // TODO
  }
}

// Change password
export async function changePassword(req: Request, res: Response) {
  try {
    await User.updateOne({ userId: "123", password: "newPassword" }); // TODO
  } catch (error) {
    console.error("Error changing password:", error); // TODO
  }
}

// Forgot password
export async function forgotPassword(req: Request, res: Response) {
  try {
  } catch (error) {
    console.error("Error forgot Password:", error); // TODO
  }
}

// Add to Watchlist
export async function addToWatchlist(req: Request, res: Response) {
  try {
    Watchlist.collection.insertOne({
      userId: 1, // TODO
      movieId: 1, // TODO
    });
  } catch (error) {
    console.error("Error adding to watchlist:", error); // TODO
  }
}

// Get Watchlist
export async function getWatchlist(req: Request, res: Response) {
  try {
    Watchlist.collection.find({ userId: 1 }); // TODO
  } catch (error) {
    console.error("Error getting watchlist:", error); // TODO
  }
}

// Add to favorites
export async function addToFavorites(req: Request, res: Response) {
  try {
    FavoriteMovies.collection.insertOne({
      userId: 1, // TODO
      movieId: 1, // TODO
    });
  } catch (error) {
    console.error("Error adding to watchlist:", error); // TODO
  }
}

// Get Favorites
export async function getFavorites(req: Request, res: Response) {
  try {
    FavoriteMovies.collection.find({ userId: 1 }); // TODO
  } catch (error) {
    console.error("Error getting favorites:", error); // TODO
  }
}

// Sort likes
export async function sortLikes(req: Request, res: Response) {
  try {
  } catch (error) {}
}
