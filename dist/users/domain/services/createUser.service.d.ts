import { User } from '.prisma/client';
import { IHashProvider } from '../../providers/models/IHashProvider';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IUserRepository } from '../../infrastructure/interfaces/IUserRepository';
export declare class CreateUserService {
    private userRepository;
    private hashProvider;
    constructor(userRepository: IUserRepository, hashProvider: IHashProvider);
    execute(dto: CreateUserDto): Promise<User>;
}
