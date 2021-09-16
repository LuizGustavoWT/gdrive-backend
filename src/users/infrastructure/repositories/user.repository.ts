import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../interfaces/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(protected readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user: Prisma.UserCreateInput = {
      ...data,
    };
    return this.prisma.user.create({ data: user });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username: username },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }
}
