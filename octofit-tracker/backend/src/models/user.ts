import { InferSchemaType, Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    fitnessLevel: { type: String, required: true },
    favoriteWorkout: { type: String, required: true },
    teamName: { type: String, required: true },
    goals: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export type UserDocument = InferSchemaType<typeof userSchema>

export const UserModel = model('User', userSchema)