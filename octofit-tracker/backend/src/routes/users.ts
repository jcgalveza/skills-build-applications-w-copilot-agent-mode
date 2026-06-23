import { UserModel } from '../models/user'
import { createModelRouter } from './createModelRouter'

// Co-authored with GitHub Copilot during the Octofit backend setup.
export const usersRouter = createModelRouter('users', UserModel)