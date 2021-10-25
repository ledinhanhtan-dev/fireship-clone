import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesson } from '../../lessons/entities/lesson.entity';

@Entity()
export class Contributor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @Column()
  avatar!: string;

  @Column()
  bio!: string;

  @Column({ nullable: true })
  github!: string;

  @Column({ nullable: true })
  linkedin!: string;

  @Column({ nullable: true })
  medium!: string;

  @Column({ nullable: true })
  portfolio!: string;

  @Column({ nullable: true })
  facebook!: string;

  @Column({ nullable: true })
  twitter!: string;

  @Column({ nullable: true })
  youtube!: string;

  @OneToMany(() => Lesson, lesson => lesson.contributor)
  lessons!: Lesson[];
}
