"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutModel = void 0;
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    equipment: [{ type: String, required: true }],
    targetMuscles: [{ type: String, required: true }],
}, { timestamps: true });
exports.WorkoutModel = (0, mongoose_1.model)('Workout', workoutSchema);
