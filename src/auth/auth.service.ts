import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(email: string, givenPassword: string) {
    const user = await this.userService.getUserByEmail(email);
    const { password, isActive, ...result } = user;
    if (!user || !(await compare(givenPassword, password)))
      throw new UnauthorizedException();
    if (!isActive)
      throw new UnauthorizedException('Please activate your Account');
    const token = await this.generateUserToken(user);
    return { ...result, ...token };
  }
  async activateAccount(id: number) {
    return this.userService.activateAccountById(id);
  }
  async generateUserToken(user: User) {
    const { firstname, lastname, email, id } = user;
    return {
      accessToken: await this.jwtService.signAsync({
        firstname,
        lastname,
        username: email,
        sub: id,
      }),
    };
    // return jwt.sign(result);
  }
}
