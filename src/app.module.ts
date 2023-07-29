import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AvatarModule } from './avatars/avatar.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Mugemikulski:Gozo1224@cluster0.56ogenx.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    AvatarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
