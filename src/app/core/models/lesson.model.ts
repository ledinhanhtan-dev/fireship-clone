import { Contributor } from './contributor.model';
import { Tag } from './tag.model';

export interface Lesson {
  name: string;
  slug: string;
  desc: string;
  image: string;
  pro: boolean;
  content: string;
  youtube: string;
  github: string;
  createdAt: string;
  updatedAt: string;

  tags: Tag[];
  contributor: Contributor;
}
