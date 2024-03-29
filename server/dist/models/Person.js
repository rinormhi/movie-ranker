"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const personSchema = new mongoose_1.default.Schema({
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
exports.Person = mongoose_1.default.model("Person", personSchema);
