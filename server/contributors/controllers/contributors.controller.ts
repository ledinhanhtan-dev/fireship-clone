import { Controller, Get, Param } from '@nestjs/common';
import { Contributor } from '../entities/contributor.entity';
import { ContributorsService } from '../services/contributors.service';

@Controller('contributors')
export class ContributorsController {
  constructor(private readonly contrService: ContributorsService) {}

  @Get()
  getAllContributors(): Promise<Contributor[]> {
    return this.contrService.getAllContributors();
  }

  @Get(':slug')
  getContributor(@Param('slug') slug: string): Promise<Contributor> {
    return this.contrService.getContributor(slug);
  }
}
