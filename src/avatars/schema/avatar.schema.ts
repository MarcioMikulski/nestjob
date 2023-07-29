import * as mongoose from 'mongoose';

export const AvatarSchema = new mongoose.Schema({
  id: String,
  userId: Number,
  avatar: String,
});
