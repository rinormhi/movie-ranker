import express from "express";
import * as MovieController from "../controllers/MovieController";

const router = express.Router();

router.get("/movies", MovieController.getMovies);
router.get("/movie", MovieController.getMovie);
router.get("/search", MovieController.searchMovies);

export default router;
