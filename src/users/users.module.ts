import { Module } from '@nestjs/common';
import { UsersController } from './application/controllers/users.controller';
import { UsersService } from './domain/services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
