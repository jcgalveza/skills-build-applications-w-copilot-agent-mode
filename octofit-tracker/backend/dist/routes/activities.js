"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiesRouter = void 0;
const activity_1 = require("../models/activity");
const createModelRouter_1 = require("./createModelRouter");
exports.activitiesRouter = (0, createModelRouter_1.createModelRouter)('activities', activity_1.ActivityModel);
