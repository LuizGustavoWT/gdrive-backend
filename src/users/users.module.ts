import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './application/controllers/users.controller';
import { CreateUserService } from './domain/services/createUser.service';
import { UsersService } from './domain/services/users.service';
import { IUserRepository } from './infrastructure/interfaces/IUserRepository';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { BCryptHashProvider } from './providers/implementations/BCryptHashProvider';
import { IHashProvider } from './providers/models/IHashProvider';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserService,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IHashProvider,
      useClass: BCryptHashProvider,
    },
  ],
  imports: [PrismaModule],
})
export class UsersModule {}
