import { ActivityModel } from '../models/activity'
import { createModelRouter } from './createModelRouter'

export const activitiesRouter = createModelRouter('activities', ActivityModel)