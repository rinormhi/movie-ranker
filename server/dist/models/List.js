"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const listSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    posterPath: String,
    description: String,
    id: Number,
    itemCount: Number,
    favoriteCount: Number,
    listType: String,
});
exports.List = mongoose_1.default.model("List", listSchema);
