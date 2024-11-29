import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config(); 

const connectDB = async () => {
  try {

    if (!process.env.MONGO_URL) {
        console.error("MONGO_URL is not defined in .env");
        process.exit(1); // Exit if MONGO_URL is not defined
      }
  

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export { connectDB, mongoose }; 
