import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  avatar: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
