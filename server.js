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

const allowedOrigins = process.env.NODE_ENV === "production"
  ? [process.env.FRONTEND_URL]
  : ["http://localhost:5173"];

const corsOptions = {
  origin: allowedOrigins,  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods if needed
    credentials: true, 
  };

  app.use((req, res, next) => {
    console.log(res.getHeaders());
    next();
  });

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

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
