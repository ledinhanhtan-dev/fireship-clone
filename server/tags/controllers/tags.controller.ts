import { Controller, Get, Param } from '@nestjs/common';
import { Tag } from '../entities/tag.entity';
import { TagsService } from '../services/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsServices: TagsService) {}

  @Get('')
  getAllTags(): Promise<Tag[]> {
    return this.tagsServices.getAllTags();
  }

  @Get(':name')
  getTag(@Param('name') name: string): Promise<Tag> {
    return this.tagsServices.getTag(name);
  }
}
