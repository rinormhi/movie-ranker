"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortLikes = exports.getFavorites = exports.addToFavorites = exports.getWatchlist = exports.addToWatchlist = exports.forgotPassword = exports.changePassword = exports.createUser = exports.deleteUser = void 0;
// Models
const FavoriteMovies_1 = require("../models/FavoriteMovies");
const User_1 = require("../models/User");
const Watchlist_1 = require("../models/Watchlist");
// Delete User
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = req.query;
            yield User_1.User.deleteOne({ email });
            res.json({ message: "Deleted user." });
        }
        catch (error) {
            console.log("Error deleting user:", error);
            res.status(500).json({ error: "Interner Serverfehler" });
        }
    });
}
exports.deleteUser = deleteUser;
// Create User
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password } = req.query;
            yield User_1.User.create({ username, email, password });
            res.status(201).json({ message: "Created user." });
        }
        catch (error) {
            console.error("Error creating user:", error); // TODO
        }
    });
}
exports.createUser = createUser;
// Change password
function changePassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User_1.User.updateOne({ userId: "123", password: "newPassword" }); // TODO
        }
        catch (error) {
            console.error("Error changing password:", error); // TODO
        }
    });
}
exports.changePassword = changePassword;
// Forgot password
function forgotPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            console.error("Error forgot Password:", error); // TODO
        }
    });
}
exports.forgotPassword = forgotPassword;
// Add to Watchlist
function addToWatchlist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Watchlist_1.Watchlist.collection.insertOne({
                userId: 1, // TODO
                movieId: 1, // TODO
            });
        }
        catch (error) {
            console.error("Error adding to watchlist:", error); // TODO
        }
    });
}
exports.addToWatchlist = addToWatchlist;
// Get Watchlist
function getWatchlist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Watchlist_1.Watchlist.collection.find({ userId: 1 }); // TODO
        }
        catch (error) {
            console.error("Error getting watchlist:", error); // TODO
        }
    });
}
exports.getWatchlist = getWatchlist;
// Add to favorites
function addToFavorites(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            FavoriteMovies_1.FavoriteMovies.collection.insertOne({
                userId: 1, // TODO
                movieId: 1, // TODO
            });
        }
        catch (error) {
            console.error("Error adding to watchlist:", error); // TODO
        }
    });
}
exports.addToFavorites = addToFavorites;
// Get Favorites
function getFavorites(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            FavoriteMovies_1.FavoriteMovies.collection.find({ userId: 1 }); // TODO
        }
        catch (error) {
            console.error("Error getting favorites:", error); // TODO
        }
    });
}
exports.getFavorites = getFavorites;
// Sort likes
function sortLikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    });
}
exports.sortLikes = sortLikes;
