import { Controller, Get, Post, Body } from '@nestjs/common';
import { MilestonesService } from './milestones.service';

@Controller('milestones')
export class MilestonesController {
  constructor(private readonly milestones: MilestonesService) {}

  @Get()
  async list() {
    return this.milestones.findAll();
  }

  @Post()
  async create(@Body() body: { title: string; description?: string; dueDate: string }) {
    // dueDate received as ISO string
    const dto = { ...body, dueDate: new Date(body.dueDate) };
    return this.milestones.create(dto);
  }
}
