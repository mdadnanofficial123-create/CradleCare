import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

// keep controller implementation untyped to avoid declaration export issues

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productsService.findAll();
  }

  @Get('category/:category')
  async byCategory(@Param('category') category: string) {
    return this.productsService.findByCategory(category);
  }
}

