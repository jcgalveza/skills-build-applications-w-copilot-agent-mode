"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUri = exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
exports.mongoUri = mongoUri;
const connectToDatabase = async () => {
    if (mongoose_1.default.connection.readyState === 1) {
        return mongoose_1.default.connection;
    }
    await mongoose_1.default.connect(mongoUri);
    console.log(`Connected to MongoDB at ${mongoUri}`);
    return mongoose_1.default.connection;
};
exports.connectToDatabase = connectToDatabase;
const disconnectFromDatabase = async () => {
    if (mongoose_1.default.connection.readyState !== 0) {
        await mongoose_1.default.disconnect();
    }
};
exports.disconnectFromDatabase = disconnectFromDatabase;
