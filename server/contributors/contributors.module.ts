import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lesson } from '../lessons/entities/lesson.entity';
import { ContributorsController } from './controllers/contributors.controller';
import { Contributor } from './entities/contributor.entity';
import { ContributorsService } from './services/contributors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contributor, Lesson])],
  controllers: [ContributorsController],
  providers: [ContributorsService],
})
export class ContributorsModule {}
