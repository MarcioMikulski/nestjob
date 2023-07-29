import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { Avatar, AvatarSchema } from '../avatars/schema/avatar.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Avatar.name,
        schema: AvatarSchema,
      },
    ]),
    HttpModule,
  ],
  providers: [AvatarService],
})
export class AvatarModule {}
