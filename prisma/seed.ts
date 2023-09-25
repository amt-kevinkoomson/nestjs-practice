import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config;

const prisma = new PrismaClient();
export const seedAdmin = async () => {
  try {
    const adminExists = await prisma.user.findFirst({
      where: {
        email: process.env.ADMIN_EMAIL,
      },
    });
    if (adminExists) {
      console.log('Admin already exists, skipping seeding... ');
      return;
    }
    const admin = await prisma.user.create({
      data: {
        firstname: 'Admin',
        email: process.env.ADMIN_EMAIL,
        password: await hash('sjsj', 12),
        isAdmin: true,
        isActive: true,
      },
    });
    console.log(admin);
    return;
  } catch (e) {
    console.log(e);
  }
};
seedAdmin();
