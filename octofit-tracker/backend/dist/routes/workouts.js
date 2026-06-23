"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutsRouter = void 0;
const workout_1 = require("../models/workout");
const createModelRouter_1 = require("./createModelRouter");
exports.workoutsRouter = (0, createModelRouter_1.createModelRouter)('workouts', workout_1.WorkoutModel);
