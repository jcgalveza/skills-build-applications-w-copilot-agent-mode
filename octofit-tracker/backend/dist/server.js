"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const apiBaseUrl_1 = require("./config/apiBaseUrl");
const database_1 = require("./config/database");
const activities_1 = require("./routes/activities");
const leaderboard_1 = require("./routes/leaderboard");
const teams_1 = require("./routes/teams");
const users_1 = require("./routes/users");
const workouts_1 = require("./routes/workouts");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/users', users_1.usersRouter);
app.use('/api/teams', teams_1.teamsRouter);
app.use('/api/activities', activities_1.activitiesRouter);
app.use('/api/leaderboard', leaderboard_1.leaderboardRouter);
app.use('/api/workouts', workouts_1.workoutsRouter);
app.get('/api/health', (_request, response) => {
    response.json({
        status: 'ok',
        service: 'octofit-tracker-backend',
        apiBaseUrl: apiBaseUrl_1.apiBaseUrl,
        port,
        mongoUri: process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db',
    });
});
app.get('/api/config', (_request, response) => {
    response.json({ apiBaseUrl: apiBaseUrl_1.apiBaseUrl, port });
});
const startServer = async () => {
    try {
        await (0, database_1.connectToDatabase)();
    }
    catch (error) {
        console.warn('MongoDB connection unavailable at startup.', error);
    }
    app.listen(port, () => {
        console.log(`Octofit backend listening on port ${port} at ${apiBaseUrl_1.apiBaseUrl}`);
    });
};
void startServer();
