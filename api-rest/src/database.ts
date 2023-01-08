import mongoose from "mongoose";
import { logger } from './logger';

// Connect to the MongoDB database
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the connection
const connection = mongoose.connection;

// Set up the connection event listeners
connection.on('connected', () => {
    logger.info('mongoose connected');
});

connection.on('error', (err: any) => {
    console.log(`Mongoose connection error: ${err}`);
});

connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    connection.close(() => {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});

export { connection };
