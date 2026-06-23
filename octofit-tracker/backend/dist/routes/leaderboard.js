"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboardRouter = void 0;
const leaderboard_1 = require("../models/leaderboard");
const createModelRouter_1 = require("./createModelRouter");
exports.leaderboardRouter = (0, createModelRouter_1.createModelRouter)('leaderboard', leaderboard_1.LeaderboardModel);
