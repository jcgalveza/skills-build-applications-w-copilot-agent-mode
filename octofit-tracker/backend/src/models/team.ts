import { InferSchemaType, Schema, model } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    coach: { type: String, required: true },
    membersCount: { type: Number, required: true },
    motto: { type: String, required: true },
    points: { type: Number, required: true },
  },
  { timestamps: true },
)

export type TeamDocument = InferSchemaType<typeof teamSchema>

export const TeamModel = model('Team', teamSchema)