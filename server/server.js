import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern-auth');

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on the port  ${PORT}`);
});
