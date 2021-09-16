import { CreateAuthDto } from 'src/auth/application/dto/create-auth.dto';
import { UpdateAuthDto } from 'src/auth/application/dto/update-auth.dto';
export declare class AuthService {
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
