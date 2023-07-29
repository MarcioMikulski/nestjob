import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { userProviders } from './schemas/user.providers';
import { AvatarModule } from '../avatars/avatar.module';
import { HttpModule } from '@nestjs/axios/dist';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule, AvatarModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
