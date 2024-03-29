"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    author: String,
    content: String,
    createdAt: String,
    id: String,
    updatedAt: String,
    url: String,
});
exports.Review = mongoose_1.default.model("Review", reviewSchema);
