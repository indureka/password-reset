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
  ? ["https://your-deployed-netlify-url.netlify.app"]
  : ["http://localhost:5173"];

const corsOptions = {
  origin: allowedOrigins,
   // "http://localhost:5173", // Development frontend
   // "https://674966b3ec4886143b5ce900--magenta-fudge-9173a9.netlify.app", // Deployed frontend
  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods if needed
    credentials: true, // Allow credentials (cookies, etc.) if needed
  };

  app.use((req, res, next) => {
    console.log(res.getHeaders());
    next();
  });

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
