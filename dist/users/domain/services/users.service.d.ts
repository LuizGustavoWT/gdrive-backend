import { CreateUserDto } from '../../application/dto/create-user.dto';
import { UpdateUserDto } from '../../application/dto/update-user.dto';
export declare class UsersService {
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
    findOne(id: number): {
        message: string;
    };
    update(id: number, updateUserDto: UpdateUserDto): {
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
    remove(id: number): {
        message: string;
    };
}
