import mongoose from 'mongoose';
import 'dotenv/config.js';

export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connection Established : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to Database : ${error.message}`);
    process.exit(1);
  }
};
