import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { UpdateUserDto } from '../../application/dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return { message: 'This action adds a new user', user: createUserDto };
  }

  findAll() {
    return {
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
      ],
    };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} user` };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: `This action updates a #${id} user`,
      user: { id: id, ...updateUserDto },
    };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} user` };
  }
}
