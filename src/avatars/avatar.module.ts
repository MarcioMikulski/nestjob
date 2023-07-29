import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { Avatar, AvatarSchema } from '../users/schemas/avatar.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios/dist';
import { AvatarController } from './avatar.controller';

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
  controllers: [AvatarController],
  providers: [AvatarService],
})
export class AvatarModule {}
