import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contributor } from '../contributors/entities/contributor.entity';
import { Tag } from '../tags/entities/tag.entity';
import { LessonsController } from './controllers/lessons.controller';
import { Lesson } from './entities/lesson.entity';
import { LessonsService } from './services/lessons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Tag, Contributor])],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
