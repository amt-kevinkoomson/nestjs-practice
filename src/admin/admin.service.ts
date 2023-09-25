import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { prisma } from 'src/config/prismaConfig';

@Injectable()
export class AdminService {
  async createUser(userData: User) {
    return await prisma.user.create({
      data: {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: await hash(userData.password, 12),
      },
    });
  }
}
