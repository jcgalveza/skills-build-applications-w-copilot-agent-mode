import { TeamModel } from '../models/team'
import { createModelRouter } from './createModelRouter'

export const teamsRouter = createModelRouter('teams', TeamModel)