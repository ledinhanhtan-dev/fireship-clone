import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contributor } from '../../contributors/entities/contributor.entity';
import { Lesson } from '../entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lsRepository: Repository<Lesson>,

    @InjectRepository(Contributor)
    private readonly contrRepository: Repository<Contributor>,
  ) {}

  async getAllLessons(): Promise<Lesson[]> {
    return this.lsRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.tags', 'tag')
      .orderBy('lesson.createdAt, tag.id', 'ASC')
      .getMany();
  }

  async getLesson(slug: string): Promise<Lesson> {
    const lesson = await this.lsRepository
      .createQueryBuilder('lesson')
      .where('lesson.slug = :slug', { slug })
      .leftJoinAndSelect('lesson.tags', 'tag')
      .getOne();

    const contributor = await this.contrRepository.findOne(2);

    if (!lesson || !contributor) throw new NotFoundException();

    lesson.contributor = contributor;
    return lesson;
  }
}
