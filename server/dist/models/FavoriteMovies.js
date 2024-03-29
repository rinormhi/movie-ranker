"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteMovies = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const favoriteMoviesSchema = new mongoose_1.default.Schema({
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
            validator: function (v) {
                return Number.isInteger(v) && v >= 0; // Wertebereich validiert
            },
            message: (props) => `${props.value} ist keine gültige Position!`,
        },
    },
});
exports.FavoriteMovies = mongoose_1.default.model("FavoriteMovies", favoriteMoviesSchema);
