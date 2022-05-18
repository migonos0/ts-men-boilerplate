import mongoose from 'mongoose';
import {log} from './logger.utility';

export async function connect() {
    const dbUri = process.env.DB_URI ?? '';
    try {
        await mongoose.connect(dbUri);
        log.info('MongoDB connection succeeded.');
    } catch (error) {
        log.error('MongoDB connection failed.');
        process.exit(1);
    }
}
