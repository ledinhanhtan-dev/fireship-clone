import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contributor } from '../entities/contributor.entity';

@Injectable()
export class ContributorsService {
  constructor(
    @InjectRepository(Contributor)
    private readonly contrRepository: Repository<Contributor>,
  ) {}

  async getAllContributors(): Promise<Contributor[]> {
    return this.contrRepository
      .createQueryBuilder('contributor')
      .select(['contributor.name', 'contributor.slug'])
      .getMany();
  }

  async getContributor(slug: string): Promise<Contributor> {
    return this.contrRepository.findOneOrFail({ slug }).catch(() => {
      throw new NotFoundException();
    });
  }
}
