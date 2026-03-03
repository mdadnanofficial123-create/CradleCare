import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private connected = false;

  async onModuleInit() {
    try {
      await this.$connect();
      this.connected = true;
    } catch (err) {
      this.connected = false;
      console.warn(
        'Prisma could not connect on startup. API will run with limited functionality until DB is available.',
      );
      console.warn(err);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  isConnected() {
    return this.connected;
  }
}

