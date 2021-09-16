import { Test, TestingModule } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { CreateUserService } from '../services/createUser.service';
import { FakeUserRepository } from '../../infrastructure/fakes/fakeUser.repository';
import { IUserRepository } from '../../infrastructure/interfaces/IUserRepository';
import { IHashProvider } from '../../providers/models/IHashProvider';
import { FakeHashProvider } from '../../providers/fakes/FakeHashProvider';

describe('Create User', () => {
  let createUser: CreateUserService;

  beforeEach(async () => {
    process.env.NODE_ENV = 'test';
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: IUserRepository,
          useClass: FakeUserRepository,
        },
        {
          provide: IHashProvider,
          useClass: FakeHashProvider,
        },
      ],
    }).compile();

    createUser = module.get<CreateUserService>(CreateUserService);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      username: 'johndoe',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same username', async () => {
    await createUser.execute({
      name: 'John Doe',
      username: 'johndoe',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        username: 'johndoe',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(HttpException);
  });
});
