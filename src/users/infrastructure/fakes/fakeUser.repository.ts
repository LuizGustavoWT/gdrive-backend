import { User } from '@prisma/client';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../interfaces/IUserRepository';

export class FakeUserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  public async create(user: CreateUserDto): Promise<User> {
    user.id =
      this.users.length > 0
        ? String(this.users[this.users.length - 1].id + 1)
        : '1';

    this.users.push(user as User);

    return user as User;
  }
}
