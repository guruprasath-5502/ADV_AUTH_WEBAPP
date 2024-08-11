import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config.js';

import { connectDB } from './db/connectDb.js';

import authRoutes from './routes/auth.route.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port : ${process.env.PORT}`);
});
