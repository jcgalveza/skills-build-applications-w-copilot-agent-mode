import { InferSchemaType, Schema, model } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    equipment: [{ type: String, required: true }],
    targetMuscles: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export type WorkoutDocument = InferSchemaType<typeof workoutSchema>

export const WorkoutModel = model('Workout', workoutSchema)