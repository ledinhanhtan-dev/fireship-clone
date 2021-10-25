import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  async getAllTags(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  async getTag(name: string): Promise<Tag> {
    const tag = await this.tagsRepository.findOne({ name });

    if (!tag) throw new NotFoundException();

    return tag;
  }
}
