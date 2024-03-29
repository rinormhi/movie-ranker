"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
(0, db_1.default)();
const app = (0, express_1.default)();
// Routes
app.use("/users", user_1.default);
app.get("/", (req, res) => {
    // addToWatchlist(req, res);
    console.log(req);
});
app.listen(process.env.DEV_PORT, () => {
    console.log(`Server is running on port ${process.env.DEV_PORT}`);
});
