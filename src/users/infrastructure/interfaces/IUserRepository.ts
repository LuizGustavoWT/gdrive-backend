import { User } from '@prisma/client';
import { CreateUserDto } from '../../application/dto/create-user.dto';

export abstract class IUserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract create(user: CreateUserDto): Promise<User>;
  abstract findByUsername(username: string): Promise<User | null>;
}
