import { SLACK_URL } from '../../constants';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tag } from '../../tags/entities/tag.entity';
import { Contributor } from '../../contributors/entities/contributor.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  slug!: string;

  @Column()
  desc!: string;

  @Column()
  image!: string;

  @Column({ default: true })
  pro: boolean = true;

  @Column({ nullable: true })
  content!: string;

  @Column({ nullable: true })
  youtube!: string;

  @Column({ nullable: true })
  github!: string;

  @Column({ default: SLACK_URL, nullable: true })
  slack!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // Relational

  @ManyToMany(() => Tag, tag => tag.lessons)
  @JoinTable()
  tags!: Tag[];

  @ManyToOne(() => Contributor, contributor => contributor.lessons)
  contributor!: Contributor;
}
