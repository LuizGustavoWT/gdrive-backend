import { User } from '@prisma/client';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../interfaces/IUserRepository';
export declare class FakeUserRepository implements IUserRepository {
    private users;
    constructor();
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    create(user: CreateUserDto): Promise<User>;
}
