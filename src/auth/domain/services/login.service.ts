import { HttpException, Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../../../auth/application/dto/login.dto';
import { IHashProvider } from '../../../users/providers/models/IHashProvider';
import { IUserRepository } from '../../../users/infrastructure/interfaces/IUserRepository';
import { IJWTProvider } from '../../../providers/JWTProvider/models/IJWTProvider';

@Injectable()
export class LoginService {
  constructor(
    @Inject(IUserRepository)
    protected readonly userRepository: IUserRepository,
    @Inject(IHashProvider)
    protected readonly hashProvider: IHashProvider,
    @Inject(IJWTProvider)
    protected readonly jwtProvider: IJWTProvider,
  ) {}

  async execute(dto: LoginDto): Promise<any> {
    const userFound = await this.userRepository.findByUsername(dto.username);

    if (!userFound) {
      throw new HttpException('User or passwor does not match', 401);
    }

    const isValid = await this.hashProvider.compareHash(
      dto.password,
      userFound.password,
    );

    if (!isValid) {
      throw new HttpException('User or passwor does not match', 401);
    }

    const token = await this.jwtProvider.sign(userFound.id);

    return { token };
  }
}
