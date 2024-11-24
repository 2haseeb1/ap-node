import express, { Application } from 'express';
import mongoose from 'mongoose';
import carRoutes from './cars/carRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/car_store')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api/cars', carRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
