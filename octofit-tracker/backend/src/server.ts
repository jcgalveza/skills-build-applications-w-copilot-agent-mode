import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { apiBaseUrl } from './config/apiBaseUrl'
import { connectToDatabase } from './config/database'
import { activitiesRouter } from './routes/activities'
import { leaderboardRouter } from './routes/leaderboard'
import { teamsRouter } from './routes/teams'
import { usersRouter } from './routes/users'
import { workoutsRouter } from './routes/workouts'

dotenv.config()

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'octofit-tracker-backend',
    apiBaseUrl,
    port,
    mongoUri: process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db',
  })
})

app.get('/api/config', (_request, response) => {
  response.json({ apiBaseUrl, port })
})

const startServer = async () => {
  try {
    await connectToDatabase()
  } catch (error) {
    console.warn('MongoDB connection unavailable at startup.', error)
  }

  app.listen(port, () => {
    console.log(`Octofit backend listening on port ${port} at ${apiBaseUrl}`)
  })
}

void startServer()