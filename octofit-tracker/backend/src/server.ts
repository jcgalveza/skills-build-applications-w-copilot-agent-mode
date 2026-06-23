import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'octofit-tracker-backend',
    mongoUri,
  })
})

const startServer = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log(`Connected to MongoDB at ${mongoUri}`)
  } catch (error) {
    console.warn('MongoDB connection unavailable at startup.', error)
  }

  app.listen(port, () => {
    console.log(`Octofit backend listening on port ${port}`)
  })
}

void startServer()