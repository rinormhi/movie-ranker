"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watchlist = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const watchlistSchema = new mongoose_1.default.Schema({
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
exports.Watchlist = mongoose_1.default.model("Watchlist", watchlistSchema);
