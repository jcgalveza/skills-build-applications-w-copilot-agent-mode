"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsRouter = void 0;
const team_1 = require("../models/team");
const createModelRouter_1 = require("./createModelRouter");
exports.teamsRouter = (0, createModelRouter_1.createModelRouter)('teams', team_1.TeamModel);
