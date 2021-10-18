import { Tag } from './tag.model';

export interface Lesson {
  name: string;
  slug: string;
  desc: string;
  image: string;

  tags: Tag[];
}
