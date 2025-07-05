import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import bookRoutes from './modules/book/book.route';
import borrowRoutes from './modules/borrow/borrow.route';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Library API is running!');
});

connectDB();

export default app;
