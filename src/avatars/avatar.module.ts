import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { avatarProviders } from './schema/avatar.providers';
import { HttpModule } from '@nestjs/axios/dist';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [AvatarService, ...avatarProviders],
  exports: [AvatarService],
})
export class AvatarModule {}
