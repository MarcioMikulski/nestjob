import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './users.controller';
import { User, UserSchema } from '../users/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios/dist';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    HttpModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
