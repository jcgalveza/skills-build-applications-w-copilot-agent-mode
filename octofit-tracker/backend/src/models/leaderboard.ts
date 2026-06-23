import { InferSchemaType, Schema, model } from 'mongoose'

const leaderboardSchema = new Schema(
  {
    period: { type: String, required: true },
    teamName: { type: String, required: true },
    userName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
)

export type LeaderboardDocument = InferSchemaType<typeof leaderboardSchema>

export const LeaderboardModel = model('Leaderboard', leaderboardSchema)