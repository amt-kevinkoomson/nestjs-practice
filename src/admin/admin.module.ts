import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.middleware';

@Module({
  imports: [],
  providers: [AdminService, { provide: APP_GUARD, useClass: AuthGuard }],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
