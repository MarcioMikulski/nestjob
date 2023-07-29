import { Document } from 'mongoose';
export class Avatar extends Document {
  readonly userId: number;
  readonly avatar: Blob;
}
