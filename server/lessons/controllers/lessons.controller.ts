import { Controller, Get, Param } from '@nestjs/common';
import { Lesson } from '../entities/lesson.entity';
import { LessonsService } from '../services/lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lsService: LessonsService) {}

  @Get('')
  getAllLessons() {
    return this.lsService.getAllLessons();
  }

  @Get(':slug')
  getPostBySlug(@Param('slug') slug: string) {
    return this.lsService.getLesson(slug);
  }
}
