import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MONGO_URI must be set');
}

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return mongoose;
    }

    const opts = {
        bufferCommands: false,
    };
    await mongoose.connect(MONGO_URI!, opts);
    return mongoose;
}

export default connectToDatabase;
