import { User } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../interfaces/IUserRepository';
export declare class UserRepository implements IUserRepository {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
