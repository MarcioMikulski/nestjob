import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  exports: [DatabaseModule],
})
export class AppModule {}
