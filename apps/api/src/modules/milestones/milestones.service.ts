import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Milestone } from '@prisma/client';

@Injectable()
export class MilestonesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Milestone[]> {
    if (!this.prisma.isConnected()) {
      // return an empty array or sample data
      return [];
    }
    return this.prisma.milestone.findMany({ orderBy: { dueDate: 'asc' } });
  }

  async create(data: {
    title: string;
    description?: string;
    dueDate: Date;
  }): Promise<Milestone> {
    return this.prisma.milestone.create({ data });
  }
}
