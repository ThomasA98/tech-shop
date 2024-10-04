import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  handleDBError(error: Prisma.PrismaClientKnownRequestError, message: string) {
    if (error.code === 'P2025') throw new NotFoundException(message);
    if (error.code === 'P2002') throw new ConflictException(message);
  }
}
