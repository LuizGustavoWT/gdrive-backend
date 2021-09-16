import { Module } from '@nestjs/common';
import { AuthService } from './domain/services/auth.service';
import { AuthController } from './application/controllers/auth.controller';
import { IUserRepository } from '../users/infrastructure/interfaces/IUserRepository';
import { UserRepository } from '../users/infrastructure/repositories/user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LoginService } from './domain/services/login.service';
import { JWTModule } from 'src/providers/JWTProvider/jwtProvider.module';
import { HashModule } from 'src/users/providers/hashProvider.module';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    LoginService,
    { provide: IUserRepository, useClass: UserRepository },
  ],
  imports: [PrismaModule, JWTModule, HashModule],
})
export class AuthModule {}
