import { CreateUserService } from 'src/users/domain/services/createUser.service';
import { UsersService } from '../../domain/services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly createUserService;
    constructor(usersService: UsersService, createUserService: CreateUserService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
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
            id: string;
            name?: string;
            password?: string;
            username?: string;
            createdAt?: Date;
            updatedAt?: Date;
            deletedAt?: Date;
        };
    };
    remove(id: string): {
        message: string;
    };
}
