import { User } from 'src/users/domain/entities/user.entity';

export class CreateUserDto extends User {
  name: string;
  password: string;
  username: string;
}
