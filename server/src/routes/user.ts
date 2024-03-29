import express from "express";
import * as UserController from "../controllers/UserController";

const router = express.Router();

router.post("/user", UserController.createUser);
router.patch("/password", UserController.changePassword);

router.patch("/watchlist", UserController.addToWatchlist);
router.get("/watchlist", UserController.getWatchlist);

router.patch("/favorite-movies", UserController.addToFavorites);
router.get("/favorite-movies", UserController.getFavorites);

router.delete("/user", UserController.deleteUser);

export default router;
