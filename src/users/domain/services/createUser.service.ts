import { User } from '.prisma/client';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { IHashProvider } from '../../providers/models/IHashProvider';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../../infrastructure/interfaces/IUserRepository';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(IUserRepository)
    private userRepository: IUserRepository,
    @Inject(IHashProvider)
    private hashProvider: IHashProvider,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findByUsername(dto.username);

    if (user) {
      throw new HttpException('User already exists', 400);
    }

    const insertUser: CreateUserDto = {
      ...dto,
      password: await this.hashProvider.generateHash(dto.password),
    };

    const newUser = await this.userRepository.create(insertUser);

    return newUser;
  }
}
