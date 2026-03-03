import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

export interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    if (!this.prisma.isConnected()) {
      return [
        {
          id: 'p_demo_1',
          name: 'Newborn Essentials Kit (Demo)',
          price: 2999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'p_demo_2',
          name: 'Comfort Stroller (Demo)',
          price: 12999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    try {
      return await this.prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      // If DB goes down during runtime, keep the UI usable.
      return [];
    }
  }

  async findByCategory(category: string): Promise<Product[]> {
    if (!this.prisma.isConnected()) {
      // simple demo mapping
      return [
        {
          id: 'p_demo_1',
          name: `Demo product for ${category}`,
          price: 1999,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }

    try {
      // Product model doesn't have a category field in schema;
      // perform a simple name-based filter to emulate category lookup.
      return await this.prisma.product.findMany({ where: { name: { contains: category } } });
    } catch {
      return [];
    }
  }
}

