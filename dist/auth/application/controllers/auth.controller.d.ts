import { AuthService } from '../../../auth/domain/services/auth.service';
import { LoginService } from '../../../auth/domain/services/login.service';
import { LoginDto } from '../dto/login.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    private readonly loginService;
    constructor(authService: AuthService, loginService: LoginService);
    create(loginDTO: LoginDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
