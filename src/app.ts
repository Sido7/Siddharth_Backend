import express from 'express';
import routes from './routes';
import { PrismaClient } from '@prisma/client';
import globalErrorHandler from './middleware/globalErrorHandler.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);
app.use(globalErrorHandler);

export const prisma = new PrismaClient();


export default app;
