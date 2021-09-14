import { UsersService } from 'src/users/domain/services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        message: string;
        user: CreateUserDto;
    };
    findAll(): {
        users: {
            id: number;
            name: string;
        }[];
    };
    findOne(id: string): {
        message: string;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        message: string;
        user: {
            username?: string;
            password?: string;
            id: number;
        };
    };
    remove(id: string): {
        message: string;
    };
}
