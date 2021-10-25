import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from '../lessons/entities/lesson.entity';
import { TagsController } from './controllers/tags.controller';
import { Tag } from './entities/tag.entity';
import { TagsService } from './services/tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, Lesson])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
