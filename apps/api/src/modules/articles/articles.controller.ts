import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articles: ArticlesService) {}

  @Get()
  async list() {
    return this.articles.findAll();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.articles.findOne(id);
  }
}
