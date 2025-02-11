

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String },
  tokenExpiry: { type: Date },
});



export default mongoose.model("User", userSchema);
