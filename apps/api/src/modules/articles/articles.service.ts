import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Article[]> {
    if (!this.prisma.isConnected()) {
      return [];
    }
    return this.prisma.article.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string): Promise<Article | null> {
    if (!this.prisma.isConnected()) return null;
    return this.prisma.article.findUnique({ where: { id } });
  }
}
