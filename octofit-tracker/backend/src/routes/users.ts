import { UserModel } from '../models/user'
import { createModelRouter } from './createModelRouter'

export const usersRouter = createModelRouter('users', UserModel)