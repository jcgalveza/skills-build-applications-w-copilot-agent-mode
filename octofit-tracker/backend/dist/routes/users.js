"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const user_1 = require("../models/user");
const createModelRouter_1 = require("./createModelRouter");
// Co-authored with GitHub Copilot during the Octofit backend setup.
exports.usersRouter = (0, createModelRouter_1.createModelRouter)('users', user_1.UserModel);
