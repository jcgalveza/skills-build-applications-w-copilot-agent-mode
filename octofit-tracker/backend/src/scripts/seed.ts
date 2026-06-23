import dotenv from 'dotenv'
import { ActivityModel } from '../models/activity'
import { LeaderboardModel } from '../models/leaderboard'
import { TeamModel } from '../models/team'
import { UserModel } from '../models/user'
import { WorkoutModel } from '../models/workout'
import { connectToDatabase, disconnectFromDatabase, mongoUri } from '../config/database'

dotenv.config()

const users = [
  {
    name: 'Maya Chen',
    username: 'mayachen',
    email: 'maya.chen@example.com',
    age: 29,
    fitnessLevel: 'advanced',
    favoriteWorkout: 'Tempo Run',
    teamName: 'Summit Sprinters',
    goals: ['Improve 10K pace', 'Run four times a week'],
  },
  {
    name: 'Jordan Alvarez',
    username: 'jordanalvarez',
    email: 'jordan.alvarez@example.com',
    age: 34,
    fitnessLevel: 'intermediate',
    favoriteWorkout: 'Kettlebell Circuit',
    teamName: 'Iron Collective',
    goals: ['Build core strength', 'Hit 8,000 weekly active calories'],
  },
  {
    name: 'Aisha Patel',
    username: 'aishapatel',
    email: 'aisha.patel@example.com',
    age: 27,
    fitnessLevel: 'beginner',
    favoriteWorkout: 'Yoga Flow',
    teamName: 'Pulse Crew',
    goals: ['Stretch daily', 'Complete three workouts per week'],
  },
]

const teams = [
  {
    name: 'Summit Sprinters',
    city: 'Denver',
    coach: 'Elena Brooks',
    membersCount: 12,
    motto: 'Fast legs, steady focus.',
    points: 1480,
  },
  {
    name: 'Iron Collective',
    city: 'Austin',
    coach: 'Marcus Hale',
    membersCount: 10,
    motto: 'Strength shared is strength doubled.',
    points: 1395,
  },
  {
    name: 'Pulse Crew',
    city: 'Seattle',
    coach: 'Nia Carter',
    membersCount: 14,
    motto: 'Consistency beats intensity alone.',
    points: 1260,
  },
]

const activities = [
  {
    userName: 'Maya Chen',
    type: 'Run',
    durationMinutes: 52,
    caloriesBurned: 610,
    intensity: 'high',
    performedAt: new Date('2026-06-20T06:30:00.000Z'),
  },
  {
    userName: 'Jordan Alvarez',
    type: 'Strength Training',
    durationMinutes: 45,
    caloriesBurned: 420,
    intensity: 'moderate',
    performedAt: new Date('2026-06-21T18:00:00.000Z'),
  },
  {
    userName: 'Aisha Patel',
    type: 'Yoga',
    durationMinutes: 38,
    caloriesBurned: 180,
    intensity: 'low',
    performedAt: new Date('2026-06-22T07:15:00.000Z'),
  },
]

const leaderboard = [
  {
    period: '2026-W25',
    teamName: 'Summit Sprinters',
    userName: 'Maya Chen',
    points: 520,
    rank: 1,
  },
  {
    period: '2026-W25',
    teamName: 'Iron Collective',
    userName: 'Jordan Alvarez',
    points: 470,
    rank: 2,
  },
  {
    period: '2026-W25',
    teamName: 'Pulse Crew',
    userName: 'Aisha Patel',
    points: 410,
    rank: 3,
  },
]

const workouts = [
  {
    title: 'Tempo Run Builder',
    category: 'Cardio',
    difficulty: 'advanced',
    durationMinutes: 50,
    equipment: ['Running shoes', 'GPS watch'],
    targetMuscles: ['Glutes', 'Hamstrings', 'Calves'],
  },
  {
    title: 'Full-Body Kettlebell Blast',
    category: 'Strength',
    difficulty: 'intermediate',
    durationMinutes: 40,
    equipment: ['Kettlebell', 'Exercise mat'],
    targetMuscles: ['Shoulders', 'Core', 'Quads'],
  },
  {
    title: 'Morning Mobility Flow',
    category: 'Recovery',
    difficulty: 'beginner',
    durationMinutes: 30,
    equipment: ['Yoga mat'],
    targetMuscles: ['Hip flexors', 'Back', 'Hamstrings'],
  },
]

const seedDatabase = async () => {
  console.log('Seed the octofit_db database with test data')
  console.log(`Using MongoDB at ${mongoUri}`)

  await connectToDatabase()

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    LeaderboardModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
  ])

  await Promise.all([
    UserModel.insertMany(users),
    TeamModel.insertMany(teams),
    ActivityModel.insertMany(activities),
    LeaderboardModel.insertMany(leaderboard),
    WorkoutModel.insertMany(workouts),
  ])

  console.log('Seeded users, teams, activities, leaderboard, and workouts.')
}

seedDatabase()
  .catch((error) => {
    console.error('Failed to seed Octofit data.', error)
    process.exitCode = 1
  })
  .finally(async () => {
    await disconnectFromDatabase()
  })