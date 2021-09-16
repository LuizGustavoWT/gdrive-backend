import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from '../../../auth/domain/services/auth.service';
import { LoginService } from '../../../auth/domain/services/login.service';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { LoginDto } from '../dto/login.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly loginService: LoginService,
  ) {}

  @Post('login')
  create(@Body() loginDTO: LoginDto) {
    return this.loginService.execute(loginDTO);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
