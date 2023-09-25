import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { Public } from 'src/decorators/public';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async logIn(@Body() loginData: { email: string; password: string }) {
    const result = await this.authService.logIn(
      loginData.email,
      loginData.password,
    );
    return result;
  }
  @Get()
  sayHello(): string {
    return 'hello world from auth';
  }
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
