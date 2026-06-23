import { WorkoutModel } from '../models/workout'
import { createModelRouter } from './createModelRouter'

export const workoutsRouter = createModelRouter('workouts', WorkoutModel)