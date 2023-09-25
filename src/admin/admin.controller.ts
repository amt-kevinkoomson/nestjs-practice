import { Controller, Post, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('create-user')
  async createUser(@Body() userData: User) {
    return await this.adminService.createUser(userData);
  }
}
