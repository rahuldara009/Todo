import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(cors());
app.use(express.json());

// Use the user routes
app.use('/users', userRoutes);

// Use the task routes
app.use('/task', taskRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
