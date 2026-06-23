import { LeaderboardModel } from '../models/leaderboard'
import { createModelRouter } from './createModelRouter'

export const leaderboardRouter = createModelRouter('leaderboard', LeaderboardModel)