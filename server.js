import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer'; 
import { connectDB, mongoose } from './src/config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './src/routes/auth.js'; 


dotenv.config();
const app = express();

connectDB(); 

const corsOptions = {
  // origin: 'http://localhost:5173',  
  // origin: 'http://localhost:5173' || process.env.FRONTEND_URL ,  
   origin: process.env.FRONTEND_URL ,  
 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods if needed
    credentials: true, 
  };

 

// Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin);
  next();
});

// Default route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Password-Reset!');
  console.log('Root route working');
});

// Routes
app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
