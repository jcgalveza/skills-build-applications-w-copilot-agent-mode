"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardModel = void 0;
const mongoose_1 = require("mongoose");
const leaderboardSchema = new mongoose_1.Schema({
    period: { type: String, required: true },
    teamName: { type: String, required: true },
    userName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
}, { timestamps: true });
exports.LeaderboardModel = (0, mongoose_1.model)('Leaderboard', leaderboardSchema);
