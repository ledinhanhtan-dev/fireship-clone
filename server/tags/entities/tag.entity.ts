import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Lesson } from '../../lessons/entities/lesson.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @CreateDateColumn()
  createdAt!: Date;

  // Relational

  @ManyToMany(() => Lesson, lesson => lesson.tags)
  lessons!: Lesson[];
}
