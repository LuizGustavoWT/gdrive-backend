import { LoginDto } from '../../../auth/application/dto/login.dto';
import { IHashProvider } from '../../../users/providers/models/IHashProvider';
import { IUserRepository } from '../../../users/infrastructure/interfaces/IUserRepository';
import { IJWTProvider } from '../../../providers/JWTProvider/models/IJWTProvider';
export declare class LoginService {
    protected readonly userRepository: IUserRepository;
    protected readonly hashProvider: IHashProvider;
    protected readonly jwtProvider: IJWTProvider;
    constructor(userRepository: IUserRepository, hashProvider: IHashProvider, jwtProvider: IJWTProvider);
    execute(dto: LoginDto): Promise<any>;
}
