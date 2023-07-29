import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AvatarDocument = Avatar & Document;

@Schema()
export class Avatar {
  @Prop()
  userId: number;

  @Prop()
  avatar: string;
}

export const AvatarSchema = SchemaFactory.createForClass(Avatar);
