import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Routers/UserRoutes.js'
import { getConnection } from './Database/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/get", userRoutes);

app.get('/', (req, res) => {
    res.send("Backend is running!")
});

app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`);
    try {
      await getConnection();  
    } catch (error) {
      console.error('Initial DB connection failed:', error.message);
    }
  });