"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const team_1 = require("../models/team");
const user_1 = require("../models/user");
const workout_1 = require("../models/workout");
const database_1 = require("../config/database");
dotenv_1.default.config();
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
];
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
];
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
];
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
];
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
];
const seedDatabase = async () => {
    console.log('Seed the octofit_db database with test data');
    console.log(`Using MongoDB at ${database_1.mongoUri}`);
    await (0, database_1.connectToDatabase)();
    await Promise.all([
        user_1.UserModel.deleteMany({}),
        team_1.TeamModel.deleteMany({}),
        activity_1.ActivityModel.deleteMany({}),
        leaderboard_1.LeaderboardModel.deleteMany({}),
        workout_1.WorkoutModel.deleteMany({}),
    ]);
    await Promise.all([
        user_1.UserModel.insertMany(users),
        team_1.TeamModel.insertMany(teams),
        activity_1.ActivityModel.insertMany(activities),
        leaderboard_1.LeaderboardModel.insertMany(leaderboard),
        workout_1.WorkoutModel.insertMany(workouts),
    ]);
    console.log('Seeded users, teams, activities, leaderboard, and workouts.');
};
seedDatabase()
    .catch((error) => {
    console.error('Failed to seed Octofit data.', error);
    process.exitCode = 1;
})
    .finally(async () => {
    await (0, database_1.disconnectFromDatabase)();
});
