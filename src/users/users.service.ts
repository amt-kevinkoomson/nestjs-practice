import { Injectable } from '@nestjs/common';
import { prisma } from 'src/config/prismaConfig';

@Injectable()
export class UsersService {
  async getUserByEmail(email: string) {
    return await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }
  async activateAccountById(id: number) {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        isActive: true,
      },
    });
  }
}
